import DS from 'ember-data';

export default DS.Model.extend({
  question_author: DS.attr(),
  question_content: DS.attr(),
  question_extra: DS.attr()
});
