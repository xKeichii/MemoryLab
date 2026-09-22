type CellProps = {
  isActive: boolean
  isSelected: boolean
  onClick: () => void
  disabled?: boolean
}

const Cell = ({ isActive, isSelected, onClick, disabled = false }: CellProps) => {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      disabled={disabled}
      className={`aspect-square h-10 w-10 rounded-md border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
        isSelected
          ? 'border-blue-700 bg-blue-600 shadow-sm'
          : isActive
            ? 'border-emerald-500 bg-emerald-400 hover:bg-emerald-500'
            : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50'
      } disabled:cursor-not-allowed disabled:opacity-60`}
    />
  );
};

export default Cell;