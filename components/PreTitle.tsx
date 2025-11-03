interface Props {
  text: string;
  center?: boolean;
}

const PreTitle = ({ text, center }: Props) => {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${center && 'justify-center'}`}
    >
      <div className="w-2 h-2 bg-accent rotate-20"></div>
      <p className="font-primary tracking-[3.2px] uppercase">{text}</p>
      <div className="w-2 h-2 bg-accent rotate-20"></div>
    </div>
  );
};

export default PreTitle;
