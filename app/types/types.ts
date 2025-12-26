export interface HeroSectionProps {
    pageBy: {
        template: {
            templateName: string,
            homePage: {
                videoPlaceholderImage: {
                    node: {
                        mediaItemUrl: string,
                    }
                },
                videoUrl: string,
                title1: string,
                title2: string,
                content: string,
                videoButton:
                {
                    bannerButton: {
                        target: string,
                        title: string,
                        url: string
                    }
                }[],
            }
        }
    }
}

export interface BlogItemDataMain {
    allNews: {
        nodes: BlogItemData[];
    };
}

export interface BlogItemData {
    title: string;
    date: string;
    status: string;
    slug: string;
    link: string;
    uri: string;
    featuredImage: {
        node: {
            altText: string;
            mediaItemUrl: string;
        };
    };
}

export interface VideoSliderDataType {
    pageBy: {
        videoSlider: {
            videosectionTitle: string;
            videos: VideosArrayType[];
        };
    };
}

export interface VideosArrayType {
    videoTitle: string;
    videoUrl: string;
    videoImage: {
        node: {
            altText: string;
            mediaItemUrl: string;
        };
    };
}

export interface FaqSectionProps {
    fAQCategories: {
        nodes: [
            {
                id: string;
                name: string;
                slug: string;
                fAQs: {
                    nodes: [
                        {
                            id: string;
                            title: string;
                            content: string;
                        }
                    ];
                };
            }
        ];
    };
}

export interface PartnerSplitHeroProps {
    pageBy: {
        template: {
            templateName: string;
            homePage: {
                threeSteps: [
                    {
                        stepLinkButton: {
                            target: string;
                            title: string;
                            url: string;
                        };
                        selectStepImage: {
                            node: {
                                mediaItemUrl: string;
                            };
                        };
                        selectStepContent: string;
                    }
                ];
                threeStepsMainTitle: string;
            };
        };
    };
}