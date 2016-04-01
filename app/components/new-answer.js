import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save() {
      var params = {
        answerer: this.get('answerer'),
        answer: this.get('answer'),
        question: this.get('question')
      };
      this.set('addNewAnswer', false),
      this.sendAction('save', params);
    }
  }
});
