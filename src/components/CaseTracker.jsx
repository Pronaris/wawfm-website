import { useEffect, useState } from 'react';
import { caseStatuses } from '../data.js';

// Illustrative timeline for one candidate. Times show a typical same-day, pharmacist-signed case.
const times = ['Mon 3:10pm', 'Mon 6:42pm', 'Tue 7:25am', '—', 'Tue 11:42am', 'Fri, monthly'];

export default function CaseTracker() {
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [step, setStep] = useState(reduce ? caseStatuses.length - 2 : 0);

  useEffect(() => {
    if (reduce) return undefined;
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % (caseStatuses.length + 2);
      setStep(Math.min(i, caseStatuses.length - 1));
    }, 1400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="tracker" aria-label="Example of how an employer tracks a candidate">
      <div className="tracker-head">
        <p className="tracker-who"><span className="tracker-avatar" aria-hidden="true">JC</span> J. Citizen · Leading hand, fabrication</p>
        <p className="tracker-tag">Example</p>
      </div>
      <ol className="tracker-rail">
        {caseStatuses.map((s, i) => {
          const skipped = s.key === 'review';
          const state = skipped ? 'skip' : i < step ? 'done' : i === step ? 'now' : 'todo';
          return (
            <li key={s.key} className={`t-step ${state}`} aria-current={state === 'now' ? 'step' : undefined}>
              <span className="t-dot" aria-hidden="true" />
              <p className="t-label">{s.label}</p>
              <p className="t-note">{skipped ? 'Not needed: all results clear' : s.note}</p>
              <p className="t-time">{skipped ? '' : times[i]}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
