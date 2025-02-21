import './css/skills.css'
function skills()
{
  return (
    <div className="skills">
      <h1 className="hs">Skills</h1>
      <h1>Programming Languages:</h1>
      <div className="gridpl">
        <img className='gitems' src='/c.png'></img>
        <img className='gitems' src='/cpp.png'></img>
        <img className='gitems' src='/java.png'></img>
        <img className='gitems' src='/py.png'></img>
      </div>
      <h1>Web Technologies:</h1>
      <div className="gridwt">
        <img className='gitems' src='/html.png'></img>
        <img className='gitems' src='/css.png'></img>
        <img className='gitems' src='/js.png'></img>
        <img className='gitems' src='/react.png'></img>
        <img className='gitems' src='/mysql.png'></img>
        <img className='gitems' src='/node.png'></img>
        </div>
        <h1>Tools</h1>
        <img className='git' src='/git.png'></img>
    </div>
  )
}
export default skills