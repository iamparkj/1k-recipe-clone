type PageButtonProp = {
  content: string;
  isSelected: boolean;
  onClick: () => void
}

const PageButton = (
  { content, isSelected, onClick }: PageButtonProp
) => {
  return isSelected ? (
    <button
      className="bg-white rounded-md px-2 py-1 text-sm"
      onClick={onClick}
    >
      {content}
    </button>
  ) : (
    <button
      className="bg-white rounded-md px-2 py-1 text-sm text-[#5c5e62]"
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default PageButton;
