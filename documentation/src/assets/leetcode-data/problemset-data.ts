// https://leetcode.com/problemset/all/

export const globalDataQuery = `
    query globalData {
        userStatus {
            userId
            isSignedIn
            isMockUser
            isPremium
            isVerified
            username
            avatar
            isAdmin
            isSuperuser
            permissions
            isTranslator
            activeSessionId
            checkedInToday
            notificationStatus {
                lastModified
                numUnread
            }
        }
    }
`;

export const siteAnnouncementsQuery = `
    query siteAnnouncements {
        siteAnnouncements {
            title
            content
            blacklistUrls
            whitelistUrls
            navbarItem
        }
    }
`;

export const getProblemSetStudyPlanAdsQuery = `
    query GetProblemSetStudyPlanAds {
        studyPlansV2AdQuestionPage {
            cover
            highlight
            name
            onGoing
            premiumOnly
            questionNum
            slug
        }
    }
`;

export const problemsetQuestionListQuery = `
    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
        problemsetQuestionList: questionList(
            categorySlug: $categorySlug
            limit: $limit
            skip: $skip
            filters: $filters
        ) {
            total: totalNum
            questions: data {
                acRate
                difficulty
                freqBar
                frontendQuestionId: questionFrontendId
                isFavor
                paidOnly: isPaidOnly
                status
                title
                titleSlug
                topicTags {
                    name
                    id
                    slug
                }
                hasSolution
                hasVideoSolution
            }
        }
    }
`;
// {"categorySlug": "", "skip": 0, "limit": 50, "filters": {}}

export const questionOfTodayQuery = `
    query questionOfToday {
        activeDailyCodingChallengeQuestion {
            date
            userStatus
            link
            question {
                acRate
                difficulty
                freqBar
                frontendQuestionId: questionFrontendId
                isFavor
                paidOnly: isPaidOnly
                status
                title
                titleSlug
                hasVideoSolution
                hasSolution
                topicTags {
                    name
                    id
                    slug
                }
            }
        }
    }
`;

export const codingChallengeMedalQuery = `
    query codingChallengeMedal($year: Int!, $month: Int!) {
        dailyChallengeMedal(year: $year, month: $month) {
            name
            config {
                icon
            }
        }
    }
`;
// {"year": 2024, "month": 1}

export const currentTimestampQuery = `
    query currentTimestamp {
        currentTimestamp
    }
`;

export const getMyStudyPlanQuery = `
    query GetMyStudyPlan($progressType: PlanUserProgressTypeEnum!, $offset: Int!, $limit: Int!) {
        studyPlanV2UserProgresses(
            progressType: $progressType
            offset: $offset
            limit: $limit
        ) {
            hasMore
            total
            planUserProgresses {
                nextQuestionInfo {
                    inPremiumSubgroup
                    nextQuestion {
                        id
                        questionFrontendId
                        title
                        titleSlug
                        translatedTitle
                    }
                }
                quittedAt
                startedAt
                plan {
                    questionNum
                    slug
                    premiumOnly
                    name
                    onGoing
                    highlight
                    cover
                }
                latestSubmissionAt
                id
                allCompletedAt
                finishedQuestionNum
            }
        }
    }
`;
// {"offset": 0, "limit": 3, "progressType": "ON_GOING"}

export const dailyCodingQuestionRecordsQuery = `
    query dailyCodingQuestionRecords($year: Int!, $month: Int!) {
        dailyCodingChallengeV2(year: $year, month: $month) {
            challenges {
                date
                userStatus
                link
                question {
                    questionFrontendId
                    title
                    titleSlug
                }
            }
            weeklyChallenges {
                date
                userStatus
                link
                question {
                    questionFrontendId
                    title
                    titleSlug
                }
            }
        }
    }
`;
// {"year": 2024, "month": 1}

export const upcOnboardingStatusQuery = `
    query upcOnboardingStatus {
        didCompleteUpc
        user {
            joinedTimestamp
        }
    }
`;

export const getStreakCounterQuery = `
    query getStreakCounter {
        streakCounter {
            streakCount
            daysSkipped
            currentDayCompleted
        }
    }
`;

export const timeTravelTicketInfoQuery = `
    query timeTravelTicketInfo {
        validTimeTravelTicketCount
        redeemedTimeTravelTicketCount
    }
`;

export const userSessionProgressQuery = `
    query userSessionProgress($username: String!) {
        allQuestionsCount {
            difficulty
            count
        }
        matchedUser(username: $username) {
            submitStats {
                acSubmissionNum {
                    difficulty
                    count
                    submissions
                }
                totalSubmissionNum {
                    difficulty
                    count
                    submissions
                }
            }
        }
    }
`;
// {"username": "akashsingh3031"}
