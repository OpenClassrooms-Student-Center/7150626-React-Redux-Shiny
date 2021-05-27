import * as answersActions from './answers'
import answersReducer from './answers'

it('reducers', () => {
  expect(
    answersReducer(
      { 1: true },
      answersActions.saveAnswer({
        questionNumber: '2',
        answer: false,
      })
    )
  ).toEqual({ 1: true, 2: false })
})
