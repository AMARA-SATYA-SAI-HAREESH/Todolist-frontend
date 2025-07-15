function Section(props) {
    const {title, children} = props;
    return ( 
        <>
            <h2 className="margin-vertical-10">{title}</h2>
            {children}
        </>
     );
}

export default Section;