// Define SectionProps with:
// title: string
// children: React.ReactNode
// The Section component should render an HTML <section> tag.
// Inside the <section>, render an <h2> with the title prop.
// Below the <h2>, render the children.
// Add some basic inline styling or a CSS class for visual distinction (e.g., a border).


interface SectionProps {
    title: string;
    children: React.ReactNode
}

function Section({ title, children }: SectionProps) {
    return (
        <section style={{ border: '3px solid black' }}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;