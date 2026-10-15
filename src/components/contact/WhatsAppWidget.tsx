import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { services } from '../../data/services';

const whatsappAddress = 'https://wa.me/919650266046';

const serviceMessages: Record<string, { label: string; text: string }[]> = {
  'custom-software': [
    { label: 'CRM or ERP', text: 'I’d like a custom CRM or ERP system for my business. Could we discuss the features, development timeline, and estimated cost?' },
    { label: 'Automate my work', text: 'I’d like to automate repetitive tasks and connect our business processes. Can you help me explore a suitable software solution?' },
    { label: 'Discuss an idea', text: 'I have an idea for custom business software and would like to discuss the requirements and next steps.' },
  ],
  'web-development': [
    { label: 'Business website', text: 'I’d like a professional, mobile-friendly website for my business. Could you share how we can get started and discuss the scope and cost?' },
    { label: 'Web app or SaaS', text: 'I’m planning a web application or SaaS product. I’d like to discuss the features, development approach, timeline, and budget.' },
    { label: 'Improve my website', text: 'I have an existing website that needs improvements. Can we discuss its design, functionality, and performance?' },
  ],
  'ui-ux-design': [
    { label: 'Website design', text: 'I’d like a clean, modern website design for my business. Could we discuss the pages, user experience, and design process?' },
    { label: 'Product UI/UX', text: 'I need UI/UX design for a web or mobile product. I’d like help with user journeys, wireframes, and a clear, consistent interface.' },
    { label: 'Improve usability', text: 'I’d like to improve the design and usability of an existing website or app. Can you help identify what needs to change?' },
  ],
  'mobile-apps': [
    { label: 'Build an app', text: 'I’d like to build a mobile app for my business. Could we discuss the features, Android and iOS options, timeline, and estimated cost?' },
    { label: 'Cross-platform app', text: 'I’m interested in an app that works on both Android and iOS. I’d like to discuss a cross-platform approach and the backend it would need.' },
    { label: 'Improve my app', text: 'I have an existing mobile app that needs improvements or new features. Can we discuss the current app and what I’d like to change?' },
  ],
  'not-sure': [
    { label: 'Help me choose', text: 'I’d like to improve my business with technology, but I’m not sure which service I need. Could you help me explore the right solution?' },
    { label: 'Discuss an idea', text: 'I have an early project idea and would like some guidance on turning it into a website, app, or software solution.' },
    { label: 'Discuss my needs', text: 'I’d like to discuss a business challenge and understand the possible solutions, budget, and next steps.' },
  ],
};

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M27 15.5a11 11 0 0 1-16.4 9.6L5 27l1.8-5.6A11 11 0 1 1 27 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="m12.1 9.8 1.5 3-1.3 1.5c1 2 2.4 3.4 4.4 4.3l1.5-1.4 3 1.5c-.2 1.8-1.2 2.7-2.9 2.3-4.9-1.2-8.2-4.5-9.2-8.9-.4-1.5.8-2.4 3-2.3Z" fill="currentColor" />
  </svg>;
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [serviceId, setServiceId] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ service?: string; message?: string }>({});
  const widget = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const serviceInput = useRef<HTMLSelectElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);
  const suggestions = serviceMessages[serviceId] ?? [];

  useEffect(() => {
    if (!open) return;
    serviceInput.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !widget.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  const serviceName = services.find(service => service.id === serviceId)?.name;
  const text = [
    'Hi TechSynchronic,',
    serviceName ? `I’m interested in ${serviceName}.` : 'I’d like some help choosing the right service.',
    '',
    message.trim(),
  ].join('\n');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const nextErrors: typeof errors = {};
    if (!serviceId) nextErrors.service = 'Please choose a service.';
    if (!message.trim()) nextErrors.message = 'Please write a little about your project.';
    setErrors(nextErrors);
    if (nextErrors.service || nextErrors.message) {
      event.preventDefault();
      if (nextErrors.service) serviceInput.current?.focus();
      else messageInput.current?.focus();
    }
    // Valid forms use a native GET navigation, encoding the complete message
    // and opening WhatsApp directly from the visitor’s submit gesture.
  }

  function close() {
    setOpen(false);
    trigger.current?.focus();
  }

  return <div className="whatsapp-widget" ref={widget} onBlur={event => {
    if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
  }}>
    {open ? <section className="whatsapp-panel" id="whatsapp-panel" role="dialog" aria-modal="false" aria-labelledby="whatsapp-title" aria-describedby="whatsapp-introduction">
      <div className="whatsapp-panel-header">
        <span className="whatsapp-panel-icon"><WhatsAppIcon size={28} /></span>
        <div><h2 id="whatsapp-title">Let’s talk on WhatsApp</h2><p>+91 9650266046</p></div>
        <button className="whatsapp-close" type="button" onClick={close} aria-label="Close WhatsApp inquiry"><X size={19} aria-hidden="true" /></button>
      </div>
      <form className="whatsapp-form" action={whatsappAddress} method="get" target="_blank" rel="noopener noreferrer" onSubmit={handleSubmit} noValidate>
        <p id="whatsapp-introduction">Choose a service to get a ready-to-send message. You can make it your own.</p>
        <input type="hidden" name="text" value={text} />
        <div className="whatsapp-field">
          <label htmlFor="whatsapp-service">Service required</label>
          <select id="whatsapp-service" ref={serviceInput} value={serviceId} required aria-invalid={errors.service ? true : undefined} aria-describedby={errors.service ? 'whatsapp-service-error' : undefined} onChange={event => {
            const nextServiceId = event.target.value;
            setMessage(current => {
              // Update suggested copy when the service changes, while keeping
              // any message the visitor has written or personalized.
              const isSuggestion = suggestions.some(suggestion => suggestion.text === current);
              return !current.trim() || isSuggestion ? serviceMessages[nextServiceId]?.[0]?.text ?? '' : current;
            });
            setServiceId(nextServiceId);
            setErrors({});
          }}>
            <option value="" disabled>Select a service</option>
            {services.map(service => <option value={service.id} key={service.id}>{service.name}</option>)}
            <option value="not-sure">I’m not sure yet</option>
          </select>
          {errors.service ? <p className="field-error" id="whatsapp-service-error" role="alert">{errors.service}</p> : null}
        </div>
        {suggestions.length ? <fieldset className="whatsapp-suggestions"><legend>Quick messages</legend><div>{suggestions.map(suggestion => <button key={suggestion.label} type="button" aria-pressed={message === suggestion.text} onClick={() => {
          setMessage(suggestion.text);
          setErrors(current => ({ ...current, message: undefined }));
        }}>{suggestion.label}</button>)}</div></fieldset> : null}
        <div className="whatsapp-field">
          <div className="whatsapp-message-label"><label htmlFor="whatsapp-message">Your message</label><button type="button" onClick={() => {
            setMessage('');
            setErrors(current => ({ ...current, message: undefined }));
            messageInput.current?.focus();
          }}>Write my own</button></div>
          <textarea id="whatsapp-message" ref={messageInput} rows={4} maxLength={1500} required placeholder="Choose a service for a suggested message, or write your own…" value={message} aria-invalid={errors.message ? true : undefined} aria-describedby={`whatsapp-message-hint${errors.message ? ' whatsapp-message-error' : ''}`} onChange={event => {
            setMessage(event.target.value);
            setErrors(current => ({ ...current, message: undefined }));
          }} />
          <p className="whatsapp-message-hint" id="whatsapp-message-hint">Send this message as it is, or edit any part of it.</p>
          {errors.message ? <p className="field-error" id="whatsapp-message-error" role="alert">{errors.message}</p> : null}
        </div>
        <button className="whatsapp-continue" type="submit"><WhatsAppIcon size={21} />Continue to WhatsApp<ArrowUpRight size={17} aria-hidden="true" /></button>
        <p className="whatsapp-note">Opens WhatsApp in a new tab or the app.<br />Review your message there and tap Send.</p>
      </form>
    </section> : null}
    <button className="whatsapp-trigger" type="button" ref={trigger} aria-label={open ? 'Close WhatsApp inquiry' : 'Discuss your project on WhatsApp'} aria-expanded={open} aria-controls={open ? 'whatsapp-panel' : undefined} aria-haspopup="dialog" onClick={() => setOpen(value => !value)}>
      {open ? <X size={24} aria-hidden="true" /> : <WhatsAppIcon size={29} />}<span>{open ? 'Close' : 'WhatsApp'}</span>
    </button>
  </div>;
}
