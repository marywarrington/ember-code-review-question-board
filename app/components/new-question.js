import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        question_author: this.get('author') ? this.get('author') : "",
        question_content: this.get('question') ? this.get('question') : "",
        question_extra: this.get('extra'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
