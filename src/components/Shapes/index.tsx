import './index.css'



type BoxProps = Omit<React.ComponentProps<'div'>, "onClick"> & {
  size?: "circle" | "shape" | "lemon";
  onClick: (val: string) => void;
};

function Box({ className = '', style = {}, size, onClick, ...props }: BoxProps) {
  const sizeClass = size ? `box__${size}` : '';

  return (
    <div
      onClick={() => onClick(sizeClass)}
      className={['box', className, sizeClass].filter(Boolean).join(' ')}
      style={{ fontStyle: "italic", ...style }}
      {...props}
    >
      Box
    </div >
  );
}

const Shapes = () => {
  const onClick = (val: string) => console.log(val)

  return (
    <div className="shapes">
      <Box onClick={onClick} size="circle" style={{ border: "4px solid red" }} />
      <Box onClick={onClick} size="shape" style={{ border: "4px solid green" }} />
      <Box onClick={onClick} size="lemon" style={{ border: "4px solid tomato" }} />
    </div>
  );
};

export default Shapes;
