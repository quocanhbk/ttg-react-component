import styled from 'styled-components'
const FromSearch = styled.form`
    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
`;

const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];

const SearchBar = () => {
    return(
        <>
            <FromSearch action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s" 
                />
                <button type="submit">Search</button>
            </FromSearch>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.name}</li>
                ))}
            </ul>
        </>
    )
};

const Search = () => {
    return(
        <>
            <SearchBar/>
        </>
    )
}

export default Search;