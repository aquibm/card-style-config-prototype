export const data = `
[
    {
      "title": "RefinementCodeReview",
      "summary": "When people think of code reviews, they usually think in terms of an explicit step in a development team's workflow.",
      "posted": "28 January 2021"
    },
    {
      "title": "PullRequest",
      "summary": "Pull Requests are a mechanism popularized by github, used to help facilitate merging of work, particularly in the context of open-source projects.",
      "posted": "28 January 2021"
    },
    {
      "title": "ComputationalNotebook",
      "summary": "A computational notebook is an environment for writing a prose document that allows the author to embed code which can be easily executed with the results also incorporated into the document. It's a platform particularly well-suited for data science work. Such environments include Jupyter Notebook, R Markdown, Mathematica, and Emacs's org-mode.",
      "posted": "18 November 2020"
    }
]
`;

export const schema = `
layout: card
sections:
  heading:
    content: title
    style:
      margin-bottom: 12px
      font-size: 20px
  summary:
    content: summary
    style:
      margin-bottom: 8px
      font-size: 16px
      line-height: 1.45
      color: '#555'
  post-date:
    content: posted
    style:
      font-size: 14px
      text-transform: uppercase
      text-align: right
      color: "#999"
`;
