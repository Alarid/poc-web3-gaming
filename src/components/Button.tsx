import clsx from "clsx"

export default function Button({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        className,
        "bg-primary hover:bg-primary-hover px-4 py-2 rounded-sm shadow-sm text-white"
      )}
      {...props}
    />
  )
}
