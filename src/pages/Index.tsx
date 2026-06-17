import { useState } from 'react';
import Icon from '@/components/ui/icon';

const PHOTO = 'https://cdn.poehali.dev/projects/53569e48-f073-4e1b-8ba6-322109743eeb/files/17695806-8585-4c59-8f7b-0d7e6db60f08.jpg';

const Index = () => {
  const [name, setName] = useState('Анна Иванова');

  return (
    <div className="min-h-screen bg-neutral-200 flex flex-col items-center gap-8 py-10 px-4 font-sans">
      <div className="no-print flex flex-col items-center gap-4 w-full max-w-[210mm]">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя участницы"
          className="w-full text-center text-xl font-display tracking-wide bg-white border border-neutral-300 rounded-md px-4 py-3 outline-none focus:border-burgundy transition-colors"
        />
        <button
          onClick={() => window.print()}
          className="group inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white px-8 py-3 rounded-md uppercase tracking-[0.2em] text-sm font-medium transition-colors"
        >
          <Icon name="Printer" size={18} />
          Скачать PDF
        </button>
      </div>

      <div
        id="certificate"
        className="relative bg-white shadow-2xl overflow-hidden flex flex-col"
        style={{ width: '210mm', height: '297mm' }}
      >
        <div className="absolute inset-0 certificate-grain opacity-[0.04] pointer-events-none z-30" />

        <div className="absolute inset-6 border border-burgundy/40 z-20 pointer-events-none" />
        <div className="absolute inset-[26px] border border-black/10 z-20 pointer-events-none" />

        <div className="relative h-[42%] overflow-hidden">
          <img src={PHOTO} alt="Группа CONTENT CAMP" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/30 via-burgundy/40 to-black/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

          <div className="absolute top-12 left-0 right-0 flex flex-col items-center z-10">
            <div className="flex items-center gap-3 text-white/90">
              <span className="h-px w-10 bg-white/60" />
              <span className="uppercase tracking-[0.45em] text-xs font-light">est. 2026</span>
              <span className="h-px w-10 bg-white/60" />
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex flex-col items-center justify-between px-16 pt-4 pb-16 text-center">
          <div className="flex flex-col items-center -mt-20 z-10">
            <h1 className="font-sans font-bold uppercase text-black leading-[0.9] text-6xl tracking-tight">
              Content<span className="text-burgundy"> Camp</span>
            </h1>
            <div className="font-display italic text-burgundy text-5xl mt-1">2026</div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="uppercase tracking-[0.4em] text-[11px] text-neutral-500 font-light">
              Диплом участницы
            </span>
            <span className="h-px w-16 bg-burgundy/50" />
          </div>

          <div className="flex flex-col items-center gap-3 w-full">
            <p className="text-neutral-500 font-display text-xl italic">настоящим подтверждается, что</p>
            <h2 className="font-display font-semibold text-black text-6xl leading-tight px-4">
              {name || '—'}
            </h2>
            <span className="h-px w-3/4 bg-black/20 mt-1" />
            <p className="text-neutral-500 font-display text-lg italic max-w-md leading-snug mt-2">
              успешно завершила полный курс интенсива и получила звание
              профессионального контент-мейкера
            </p>
          </div>

          <div className="w-full flex items-end justify-between pt-6">
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl text-black border-b border-black/30 px-8 pb-1">June 2026</span>
              <span className="uppercase tracking-[0.25em] text-[9px] text-neutral-400">Дата</span>
            </div>

            <div className="relative flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-burgundy/70 flex items-center justify-center">
                <div className="w-[84px] h-[84px] rounded-full border border-burgundy/40 flex flex-col items-center justify-center text-burgundy">
                  <Icon name="Award" size={26} />
                  <span className="uppercase tracking-[0.15em] text-[7px] mt-1 font-medium leading-tight text-center">Official<br/>Seal</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="font-display italic text-2xl text-black border-b border-black/30 px-8 pb-1">C. Camp</span>
              <span className="uppercase tracking-[0.25em] text-[9px] text-neutral-400">Подпись</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
