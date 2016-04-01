import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('question') ? this.get('question') : "",
        extra: this.get('extra'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
