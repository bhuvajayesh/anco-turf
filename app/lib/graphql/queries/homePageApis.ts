import { gql } from "@apollo/client";

export const HOME_PAGE_VIDEO = gql`
  query HomePageVideo {
    pageBy(pageId: 4) {
      template {
        templateName
        ... on Template_HomePage1 {
          templateName
          homePage {
            videoPlaceholderImage {
              node {
                mediaItemUrl
              }
            }
            videoUrl
            title1
            title2
            content
            videoButton {
              bannerButton {
                target
                title
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const WHY_ANCO_TURF = gql`
  query whyAncoTurf {
  pageBy(pageId: 4) {
    template {
        templateName
        ... on Template_HomePage1 {
            homePage {
            whyAncoTurfMainTitle
            whyAncoTurf {
                whyAncoTurfIcon {
                node {
                    mediaItemUrl
                    altText
                    title
                }
                }
                whyAncoTurfTitle
                whyAncoTurfText
            }
            }
        }
        }
    }
    }
`;

export const TURF_VARIANTS = gql`
  query TurfVariants {
    globalSections {
      globalSectionsOptions {
        turfvarianttitle  
        turfVariantcontent
        image {
          node {
            mediaItemUrl
          }
        }
        turfVarietiesList {
          title
          content
          image {
            node {
              mediaItemUrl
            }
          }
          view {
            target
            title
            url
          }
          buyNowButton {
            target
            title
            url
          } 
        }
      }
    }
  }
`;

export const LAWN4STEPS = gql`
  query Lawn4Steps {
    pageBy(pageId: 4) {
      homePage {
        threeStepsMainTitle
        threeSteps {
          selectStepContent
          stepTitle
          stepLinkButton {
            target
            title
            url
          }
          selectStepImage {
            node {
              mediaItemUrl
              altText
            }
          }
        }
      }
    }
  }
`;

export const VIDEO_SLIDER = gql`
  query videoSlider {
    pageBy(pageId: 4) {
      videoSlider {
        videosectionTitle
        videos {
          videoTitle
          videoUrl
          videoImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export const PARTNER_WITH_ANCO = gql`
  query PartnerWithAnco {
    pageBy(pageId: 4) {
      template {
        templateName
        ... on Template_HomePage1 {
          homePage {
            threeSteps {
              stepLinkButton {
                target
                title
                url
              }
              selectStepImage {
                node {
                  mediaItemUrl
                }
              }
              selectStepContent
            }
            threeStepsMainTitle
          }
        }
      }
    }
  }
`;

export const LATEST_BLOGS = gql`
  query LatestBlogs {
    allNews(
      after: ""
      before: ""
      first: 6
      where: {
      status: PUBLISH
      }
    ) {
      nodes {
        title
        date
        status
        slug
        link
        uri
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }

      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    
    }
  }
`;

export const FAQ_CATEGORIES_WITH_FAQS = gql`
  query GetFaqCategoriesWithFaqs {
    fAQCategories(where: { hideEmpty: true }) {
      nodes {
        id
        name
        slug

        fAQs(first: 100) {
          nodes {
            id
            title
            content
          }
        }
      }
    }
  }
`;

export const BLOG_CATEGORIES = gql`
  query BlogCategory {
    terms(where: {taxonomies: NEWSCATEGORY}) {
      edges {
        node {
          termTaxonomyId
          link
          name
          slug
        }
      }
    }
  }
`;

export const GET_NEWS_BY_CATEGORY = gql`
  query GetNewsByCategory {
    allNews(
      where: {taxQuery: {relation: AND, taxArray: {taxonomy: NEWSCATEGORY, field: SLUG, terms: "anco-turf"}}, status: PUBLISH}
      first: 10
      after: ""
    ) {
      edges {
        node {
          title
          status
          slug
          link
          uri
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
