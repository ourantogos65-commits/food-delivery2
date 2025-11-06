type Props = {
  setCurrentIndex: any;
  currentIndex: any;
};
export const BackButton = ({ setCurrentIndex, currentIndex }: Props) => {
  return (
    <div className="pb-5 ">
      {currentIndex > 0 && (
        <button
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className="border rounded-md py-1 px-2"
        >
          ←
        </button>
      )}
    </div>
  );
};
