type Props = {
  setCurrentIndex: any;
  currentIndex: any;
};
export const NextButton = ({ setCurrentIndex, currentIndex }: Props) => {
  return (
    <div className="pb-5">
      {currentIndex < 2 && (
        <button
          onClick={() => setCurrentIndex(currentIndex + 1)}
          className="border rounded-md bg-black text-white w-full py-1"
        >
          contiune
        </button>
      )}
    </div>
  );
};
