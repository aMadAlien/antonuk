
export default function Input({ value, onChange, placeholder, errored }:
  {
    value: string;
    onChange: (e: string) => void;
    placeholder: string;
    errored?: boolean;
  }
) {
  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      title={placeholder}
      placeholder={placeholder}
      className={`input ${errored && 'errored'}`}
    />
  )
}
