type Props = {
  currentIndex: any;
};
export const NextButton = ({ currentIndex }: Props) => {
  return (
    <div className="pb-5">
      {currentIndex < 2 && (
        <button
          type="submit"
          className="border rounded-md bg-black text-white w-full py-1"
        >
          Let's Go
        </button>
      )}
    </div>
  );
};
