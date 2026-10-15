import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react';
import { submitLead } from '../../lib/leadSubmission';
import { services } from '../../data/services';

type Fields = { name: string; email: string; company: string; service: string; description: string; budget: string };
type Errors = Partial<Record<keyof Fields, string>>;
const emptyFields: Fields = { name: '', email: '', company: '', service: '', description: '', budget: '' };
const subscribeToSearch = () => () => {};
function readRequestedService() {
  const id = new URLSearchParams(window.location.search).get('service');
  return services.some(service => service.id === id) ? id! : '';
}

export function ContactSection() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const submitting = useRef(false);
  const requestedService = useSyncExternalStore(subscribeToSearch, readRequestedService, () => '');
  const selectedService = fields.service || requestedService;
  useEffect(() => { if (status === 'success' || status === 'error') feedbackRef.current?.focus(); }, [status]);

  function update(name: keyof Fields, value: string) {
    setFields(current => ({ ...current, [name]: value }));
    setErrors(current => ({ ...current, [name]: undefined }));
    if (status === 'error') setStatus('idle');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const nextErrors: Errors = {};
    if (!fields.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) nextErrors.email = 'Please enter a valid email address.';
    if (!selectedService) nextErrors.service = 'Please select a service, or choose “I’m not sure yet”.';
    if (fields.description.trim().length < 20) nextErrors.description = 'Please share at least 20 characters about your project.';
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }
    submitting.current = true;
    setStatus('sending');
    try {
      await submitLead('New Project Inquiry — TechSynchronic', {
        name: fields.name.trim(), email: fields.email.trim(), company: fields.company.trim(),
        projectType: services.find(service => service.id === selectedService)?.name ?? 'Not sure yet',
        projectDescription: fields.description.trim(), budgetRange: fields.budget || 'Not specified',
      });
      setStatus('success');
      setFields(emptyFields);
    } catch { setStatus('error'); }
    finally { submitting.current = false; }
  }
  const fieldProps = (name: keyof Fields) => ({
    id: name, name, value: name === 'service' ? selectedService : fields[name],
    'aria-invalid': errors[name] ? true as const : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : name === 'description' ? 'description-hint' : undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => update(name, event.target.value),
  });
  const error = (name: keyof Fields) => errors[name] ? <p className="field-error" id={`${name}-error`}>{errors[name]}</p> : null;

  return <div className="inquiry-panel">{status === 'success' ? (
    <div className="form-success" ref={feedbackRef} tabIndex={-1} role="status"><span className="success-icon"><Check size={27} aria-hidden="true" /></span><p className="eyebrow">INQUIRY SENT</p><h2>Thanks for sharing<br />your idea.</h2><p>Your inquiry has been accepted by our email service. We’ll get in touch at the email address you provided to continue the conversation.</p><button className="button button-secondary" type="button" onClick={() => setStatus('idle')}>Send another inquiry <ArrowUpRight size={17} aria-hidden="true" /></button></div>
  ) : (
    <form ref={formRef} noValidate onSubmit={handleSubmit} aria-labelledby="inquiry-title" aria-busy={status === 'sending'}>
      <div className="form-heading"><h2 id="inquiry-title">Tell us about your project</h2><p>Fields marked <span aria-hidden="true">*</span> are required.</p></div>
      <fieldset disabled={status === 'sending'}><legend className="sr-only">Project inquiry details</legend>
        <div className="form-row">
          <div className="field"><label htmlFor="name">Your name <span aria-hidden="true">*</span></label><input {...fieldProps('name')} autoComplete="name" placeholder="Alex Smith" maxLength={100} required />{error('name')}</div>
          <div className="field"><label htmlFor="email">Business email <span aria-hidden="true">*</span></label><input {...fieldProps('email')} type="email" autoComplete="email" placeholder="alex@company.com" maxLength={254} required />{error('email')}</div>
        </div>
        <div className="field"><label htmlFor="company">Company name <span className="optional">(optional)</span></label><input {...fieldProps('company')} autoComplete="organization" placeholder="Your company" maxLength={160} /></div>
        <div className="field"><label htmlFor="service">What can we help with? <span aria-hidden="true">*</span></label><select {...fieldProps('service')} required><option value="" disabled>Select a service</option>{services.map(service => <option key={service.id} value={service.id}>{service.name}</option>)}<option value="not-sure">I’m not sure yet</option></select>{error('service')}</div>
        <div className="field"><label htmlFor="description">A little about your project <span aria-hidden="true">*</span></label><textarea {...fieldProps('description')} rows={5} minLength={20} maxLength={6000} required placeholder="What are you looking to build or improve? What problem would you like to solve?" /><p className="field-hint" id="description-hint">A few sentences are enough to get started.</p>{error('description')}</div>
        <div className="field"><label htmlFor="budget">Approximate budget <span className="optional">(optional)</span></label><input {...fieldProps('budget')} placeholder="An estimate or range, including currency" maxLength={120} /></div>
      </fieldset>
      {status === 'error' ? <div className="submit-error" role="alert" tabIndex={-1} ref={feedbackRef}><strong>Your inquiry couldn’t be sent.</strong><p>Please try again. You can also email <a href="mailto:mesingh9719@gmail.com">mesingh9719@gmail.com</a> directly. Your details are still here.</p></div> : null}
      <button className="button button-primary submit-button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? <>Sending your inquiry <LoaderCircle className="loading-icon" size={18} aria-hidden="true" /></> : <>Send Project Inquiry <ArrowUpRight size={18} aria-hidden="true" /></>}</button>
      <p className="form-note">We’ll use these details to respond to your project inquiry.</p>
    </form>
  )}</div>;
}
