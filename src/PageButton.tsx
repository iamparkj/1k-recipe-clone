type PageButtonProp = {
  content: string;
  isSelected: boolean;
  onClick: () => void
}

const PageButton = (
  { content, isSelected, onClick }: PageButtonProp
) => {
  const textColour = isSelected ? "#000000" : "#5c5e62";

  return (
    <button
      className={`bg-white rounded-md px-2 py-1 text-sm text=[${textColour}]`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default PageButton;
