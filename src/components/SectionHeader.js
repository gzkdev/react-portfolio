function SectionHeader({ headingText, paragraphText, headerType }) {
    return (
        <div className={headerType}>
            {headingText && <h2>{headingText}</h2>}
            {paragraphText && <p>{paragraphText}</p>}
        </div>
    )
}

export default SectionHeader
