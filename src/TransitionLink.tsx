import { Link, useNavigate } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export default function TransitionLink({ to, children, className }: Props) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => navigate(to));
    } else {
      navigate(to);
    }
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
