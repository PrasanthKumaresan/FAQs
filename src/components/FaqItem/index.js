import './index.css'

const FaqItem = props => {
  const {list, answeringList, checkAnswer} = props
  const {id, questionText, answerText} = list
  const ImgUrl = answeringList.includes(id)
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = answeringList.includes(id) ? 'minus' : 'plus'
  const iconClicked = () => {
    checkAnswer(id)
  }
  const canRead = () => {
    if (answeringList.includes(id)) {
      console.log('triggeredcanR')
      return (
        <div>
          <hr className="line" />
          <p className="answerList">{answerText}</p>
        </div>
      )
    }
    return ''
  }
  return (
    <li className="faqList-container">
      <div className="question-Container">
        <h1 className="list-question">{questionText}</h1>
        <img
          className="plus-icon"
          src={ImgUrl}
          alt={altText}
          onClick={iconClicked}
        />
      </div>
      {canRead()}
    </li>
  )
}

export default FaqItem
