import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,

  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        extra: this.get('extra'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
    }
  }
});
