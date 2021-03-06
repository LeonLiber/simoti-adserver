'use strict';

module.exports = (rawArticle) => {
  return [
    {
      name: 'title',
      value: rawArticle.title ? rawArticle.title : '',
      excludeFromIndexes: false
    },
    {
      name: 'content',
      value: rawArticle.content ? rawArticle.content : '',
      excludeFromIndexes: true
    },
    {
      name: 'url',
      value: rawArticle.url ? rawArticle.url : '',
      excludeFromIndexes: false
    },
    {
      name: 'status',
      value: rawArticle.status ? rawArticle.status : '',
      excludeFromIndexes: false
    },
    {
      name: 'language',
      value: rawArticle.language ? rawArticle.language : '',
      excludeFromIndexes: false
    },
    {
      name: 'snippetProperties',
      value: rawArticle.snippetProperties ? rawArticle.snippetProperties : {},
      excludeFromIndexes: true
    },
    {
      name: 'snippetHTML',
      value: rawArticle.snippetHTML ? rawArticle.snippetHTML : '',
      excludeFromIndexes: true
    },
    {
      name: 'snippetId',
      value: rawArticle.snippetId ? rawArticle.snippetId : ['empty'],
      excludeFromIndexes: false
    },
    {
      name: 'createDate',
      value: rawArticle.createDate ? rawArticle.createDate : new Date(),
      excludeFromIndexes: false
    },
    {
      name: 'updateDate',
      value: rawArticle.updateDate ? rawArticle.updateDate : new Date(),
      excludeFromIndexes: false
    }
  ];
};
