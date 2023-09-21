import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";

interface IInputProps {
  name: any;
  control: Control<any> | Control<any> | undefined;
  placeholder?: string | undefined;
}

export default function Input({ name, control, placeholder }: IInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div>
            <input
              type="text"
              placeholder={placeholder}
              autoComplete="off"
              value={field.value}
              onChange={field.onChange}
            />
          </div>
        );
      }}
    />
  );
}
