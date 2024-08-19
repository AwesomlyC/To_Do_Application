import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
const AboutPageComponent = () => {

  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AwesomlyC/To_Do_Application/master/README.md')
    .then((response) => response.text())
    .then((text) => setContent(text))
  }, [])


  return (
    <div className='container'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default AboutPageComponent