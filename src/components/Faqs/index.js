import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {answeringList: []}

  checkAnswer = id => {
    const {answeringList} = this.state
    console.log(!answeringList.includes(id))
    if (!answeringList.includes(id)) {
      this.setState(prevState => ({
        answeringList: [...prevState.answeringList, id],
      }))
    } else {
      this.setState(prevState => ({
        answeringList: prevState.answeringList.filter(
          eachElement => eachElement !== id,
        ),
      }))
    }
  }

  render() {
    const {answeringList} = this.state
    console.log(answeringList)
    const {faqsList} = this.props
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="faq-header">FAQs</h1>
          <ul className="unordered-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                list={eachFaq}
                key={eachFaq.id}
                answeringList={answeringList}
                checkAnswer={this.checkAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
