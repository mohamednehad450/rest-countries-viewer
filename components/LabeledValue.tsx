import { FC } from "react";

interface LabeledValueProps {
  label: string;
  value?: string;
}

const LabeledValue: FC<LabeledValueProps> = ({ label, value }) => {
  if (!value) return null;
  return (
    <span>
      <span className="font-semibold">{label}: </span>
      <span className="font-extralight">{value}</span>
    </span>
  );
};

export default LabeledValue;
