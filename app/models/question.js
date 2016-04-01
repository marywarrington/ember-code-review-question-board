import DS from 'ember-data';

export default DS.Model.extend({
  questionAuthor: DS.attr(),
  questionContent: DS.attr(),
  questionExtra: DS.attr()
});
