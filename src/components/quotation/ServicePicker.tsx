import { Check, Minus, Plus } from "lucide-react";
import { quoteServices, type QuoteService } from "../../data/quotation";
import { formatINR, type QuoteSelection } from "../../utils/quotation";

interface ServicePickerProps {
  selection: QuoteSelection;
  onToggle: (serviceId: string) => void;
  onQuantityChange: (serviceId: string, quantity: number) => void;
}

interface QuantityStepperProps {
  service: QuoteService;
  quantity: number;
  onChange: (quantity: number) => void;
}

const stepperButton =
  "flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-700 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700";

const QuantityStepper = ({ service, quantity, onChange }: QuantityStepperProps) => (
  <div className="mt-3 flex items-center gap-2.5">
    <button
      type="button"
      onClick={() => onChange(quantity - 1)}
      disabled={quantity <= 1}
      aria-label={`Fewer ${service.unitLabel}s`}
      className={stepperButton}
    >
      <Minus size={14} />
    </button>
    <span className="min-w-[4.5rem] text-center text-sm font-semibold text-slate-900" aria-live="polite">
      {quantity} {service.unitLabel}
      {quantity === 1 ? "" : "s"}
    </span>
    <button
      type="button"
      onClick={() => onChange(quantity + 1)}
      disabled={quantity >= (service.maxQuantity ?? 1)}
      aria-label={`More ${service.unitLabel}s`}
      className={stepperButton}
    >
      <Plus size={14} />
    </button>
  </div>
);

const ServicePicker = ({ selection, onToggle, onQuantityChange }: ServicePickerProps) => (
  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
    {quoteServices.map((service) => {
      const quantity = selection[service.id] ?? 0;
      const selected = quantity > 0;

      return (
        <div
          key={service.id}
          className={`rounded-2xl border p-4 transition-colors ${
            selected ? "border-accent-500 bg-accent-50/70 shadow-sm" : "border-slate-200 bg-white hover:border-accent-300"
          }`}
        >
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={selected}
              onChange={() => onToggle(service.id)}
              className="peer sr-only"
            />
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-accent-500/50 ${
                selected ? "border-accent-600 bg-accent-600 text-white" : "border-slate-300 bg-white"
              }`}
              aria-hidden="true"
            >
              {selected && <Check size={13} strokeWidth={3} />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold text-slate-950">{service.title}</span>
              {service.subtitle && <span className="block text-xs text-slate-500">{service.subtitle}</span>}
              <span className="mt-1.5 block text-sm font-semibold text-accent-700">
                {formatINR(service.price)}
                {service.unitLabel && <span className="font-normal text-slate-500"> / {service.unitLabel}</span>}
              </span>
            </span>
          </label>

          {selected && service.unitLabel && (
            <QuantityStepper
              service={service}
              quantity={quantity}
              onChange={(next) => onQuantityChange(service.id, next)}
            />
          )}
        </div>
      );
    })}
  </div>
);

export default ServicePicker;
