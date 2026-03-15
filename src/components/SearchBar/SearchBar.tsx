import "./SearchBar.css"

interface Props {
    value: string
    onChange: (value: string) => void
}

const SearchBar = ({value, onChange}: Props) => {
    return (
        <input 
            className="search-bar"
            type="text"
            placeholder="Search restaurant or cuisines"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default SearchBar