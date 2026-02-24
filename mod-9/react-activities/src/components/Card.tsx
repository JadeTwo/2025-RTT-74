interface CardProps {
  title: string;
  // Define children prop type using React.ReactNode
  // ReactNode covers anything React can render: elements, strings, numbers, null, etc.
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-content">
        {children} {/* Render the content passed between the tags */}
      </div>
    </div>
  );
}

export default Card;