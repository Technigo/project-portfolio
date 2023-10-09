export const Header = (props) => {
    return(
        <div style={{position: 'fixed', zIndex: '3000', color: 'yellow', backgroundColor: 'black'}}>
            <p>{props.name}</p>
      <p>{props.email}</p>
      <p>|<a href={props.linkedinLink}>linkedin</a>|
      <a href={props.githubLink}>github</a>|<a href={props.stackoverflowLink}>stackoverflow</a>|</p>
            </div>
    )
}

//add navigation links?