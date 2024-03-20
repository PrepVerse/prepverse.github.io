// https://leetcode.com/problems/<-----{problem-slug}----->/

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

export const studyPlanV2RecentCompletedProgressQuery = `
    query studyPlanV2RecentCompletedProgress($planSlug: String!) {
        studyPlanV2RecentCompletedProgress(planSlug: $planSlug) {
            id
            status
        }
    }
`;
// {"planSlug": ""}

export const tabsStatusQuery = `
    query tabsStatus($titleSlug: String!) {
        questionTopicsList(questionSlug: $titleSlug) {
            totalNum
        }
        questionDiscussionTopic(questionSlug: $titleSlug) {
            topLevelCommentCount
        }
    }
`;
// {"titleSlug": "two-sum"}

export const questionTitleQuery = `
    query questionTitle($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            questionId
            questionFrontendId
            title
            titleSlug
            isPaidOnly
            difficulty
            likes
            dislikes
        }
    }
`;
// {"titleSlug": "two-sum"}

export const premiumQuestionQuery = `
    query premiumQuestion($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            isPaidOnly
        }
    }
`;
// {"titleSlug": "two-sum"}

export const similarQuestionsQuery = `
    query SimilarQuestions($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            similarQuestionList {
                difficulty
                titleSlug
                title
                translatedTitle
                isPaidOnly
            }
        }
    }
`;
// {"titleSlug": "two-sum"}

export const singleQuestionTopicTagsQuery = `
    query singleQuestionTopicTags($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            topicTags {
                name
                slug
            }
        }
    }
`;
// {"titleSlug": "two-sum"}

export const userCanSeeQuestionQuery = `
    query userCanSeeQuestion($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            canSeeQuestion
        }
    }
`;
// {"titleSlug": "two-sum"}

export const consolePanelConfigQuery = `
    query consolePanelConfig($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            questionId
            questionFrontendId
            questionTitle
            enableDebugger
            enableRunCode
            enableSubmit
            enableTestMode
            exampleTestcaseList
            metaData
        }
    }
`;
// {"titleSlug": "two-sum"}

export const questionEditorDataQuery = `
    query questionEditorData($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            questionId
            questionFrontendId
            codeSnippets {
                lang
                langSlug
                code
            }
            envInfo
            enableRunCode
        }
    }
`;
// {"titleSlug": "two-sum"}

export const languageListQuery = `
    query languageList {
        languageList {
            id
            name
        }
    }
`;

export const surveyV2Query = `
    query SurveyV2($surveySlug: String!) {
        surveyV2(surveySlug: $surveySlug) {
            showSurvey
            surveyJson
            leetcoinAmount
        }
    }
`;
// {"surveySlug": "javascript_problem_survey"}

export const qdFeatureGuideQuery = `
    query qdFeatureGuide {
        userStatus {
            completedFeatureGuides
            isSignedIn
        }
    }
`;

export const annualReportQuery = `
    query annualReport {
        userStatus {
            annualReport {
                showPopup
                content
                badge {
                    displayName
                    medal {
                        slug
                        config {
                            iconGif
                        }
                    }
                }
            }
        }
    }
`;

export const questionContentQuery = `
    query questionContent($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            content
            mysqlSchemas
        }
    }
`;
// {"titleSlug": "two-sum"}

export const qdChallengeQuestionQuery = `
    query qdChallengeQuestion($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            challengeQuestion {
                id
                date
                incompleteChallengeCount
                streakCount
                type
            }
        }
    }
`;
// {"titleSlug": "two-sum"}

export const learningContextNameQuery = `
    query learningContextName($currentQuestionSlug: String!, $envId: String, $envType: String) {
        learningContextV2(
            currentQuestionSlug: $currentQuestionSlug
            envId: $envId
            envType: $envType
            needQuestion: false
        ) {
            name
        }
    }
`;
// {"currentQuestionSlug": "two-sum", "filters": {}, "envId": "", "envType": "problem-list"}
// {"envType": "", "envId": "", "currentQuestionSlug": "two-sum"}

export const getStreakCounterQuery = `
    query getStreakCounter {
        streakCounter {
            streakCount
            daysSkipped
            currentDayCompleted
        }
    }
`;

export const currentTimestampQuery = `
    query currentTimestamp {
        currentTimestamp
    }
`;

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

export const questionHintsQuery = `
    query questionHints($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            hints
        }
    }
`;
// {"titleSlug": "two-sum"}

export const userQuestionStatusQuery = `
    query userQuestionStatus($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            status
        }
    }
`;
// {"titleSlug": "two-sum"}

export const userQuestionLikeQuery = `
    query userQuestionLike($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            isLiked
        }
    }
`;
// {"titleSlug": "two-sum"}

export const userFavoritesQuery = `
    query userFavorites {
        favoritesLists {
            allFavorites {
                idHash
                name
                isPublicFavorite
                questions {
                    titleSlug
                }
            }
        }
    }
`;

export const questionStatsQuery = `
    query questionStats($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            stats
        }
    }
`;
// {"titleSlug": "two-sum"}

export const userQuestionAdminUrlsQuery = `
    query userQuestionAdminUrls($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            libraryUrl
            adminUrl
        }
    }
`;
// {"titleSlug": "two-sum"}

export const questionCompanyStatsQuery = `
    query questionCompanyStats($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            companyTagStats
        }
    }
`;
// {"titleSlug": "two-sum"}

export const discussionTopicQuery = `
    query discussionTopic($questionSlug: String!) {
        questionDiscussionTopic(questionSlug: $questionSlug) {
            id
            commentCount
            topLevelCommentCount
        }
    }
`;
// {"questionSlug": "two-sum"}

export const syncedCodeQuery = `
    query syncedCode($questionId: Int!, $lang: Int!) {
        syncedCode(questionId: $questionId, lang: $lang) {
            timestamp
            code
        }
    }
`;
// {"lang": 11, "questionId": 34}

export const enableAiHelperQuery = `
    query enableAiHelper {
        feature {
            enableAiHelper
        }
    }
`;

export const debuggerLanguageFeaturesQuery = `
    query debuggerLanguageFeatures {
        debuggerLanguageFeatures {
            lang {
                name
            }
            supportsExpressions
            supportsDisablingBreakpoints
            supportsDebugging
        }
    }
`;

export const editorialMetaQuery = `
    query editorialMeta($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            solution {
                paidOnly
                hasVideoSolution
                canSeeDetail
            }
        }
    }
`;
// {"titleSlug": "two-sum"}

export const hasOfficialSolutionQuery = `
    query hasOfficialSolution($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            solution {
                id
            }
        }
    }
`;
// {"titleSlug": "two-sum"}

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

export const submissionListQuery = `
    query submissionList($offset: Int!, $limit: Int!, $lastKey: String, $questionSlug: String!, $lang: Int, $status: Int) {
        questionSubmissionList(
            offset: $offset
            limit: $limit
            lastKey: $lastKey
            questionSlug: $questionSlug
            lang: $lang
            status: $status
        ) {
            lastKey
            hasNext
            submissions {
                id
                title
                titleSlug
                status
                statusDisplay
                lang
                langName
                runtime
                timestamp
                url
                isPending
                memory
                hasNotes
                notes
            }
        }
    }
`;
// {"questionSlug": "two-sum", "offset": 0, "limit": 20, "lastKey": null}

export const submissionFilterTypesQuery = `
    query submissionFilterTypes {
        submittableLanguageList {
            id
            verboseName
        }
        statusList {
            id
            name
        }
    }
`;
// {"titleSlug": "two-sum"}

export const questionNoteQuery = `
    query questionNote($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            questionId
            note
        }
    }
`;
// {"questionSlug": "two-sum"}

export const solutionTagsQuery = `
    query solutionTags($questionSlug: String!) {
        solutionTopicTags(questionSlug: $questionSlug) {
            name
            slug
            count
        }
        solutionLanguageTags(questionSlug: $questionSlug) {
            name
            slug
            count
        }
    }
`;
// {"query": "", "languageTags": [], "topicTags": [], "questionSlug": "two-sum", "skip": 30, "first": 15, "orderBy": "hot"}
// {"query": "", "languageTags": ["python3"], "topicTags": ["binary-search"], "questionSlug": "two-sum", "skip": 15, "first": 15, "orderBy": "hot"}
// {"query": "", "languageTags": [], "topicTags": [], "questionSlug": "two-sum", "skip": 15, "first": 15, "orderBy": "hot"}
// {"query": "", "languageTags": [], "topicTags": ["binary-search"], "questionSlug": "two-sum", "skip": 0, "first": 15, "orderBy": "hot"}
// {"query": "", "languageTags": [], "topicTags": [], "questionSlug": "two-sum", "skip": 0, "first": 15, "orderBy": "hot"}
// {"query": "", "languageTags": ["python3"], "topicTags": ["binary-search"], "questionSlug": "two-sum", "skip": 0, "first": 15, "orderBy": "hot"}

export const communitySolutionsQuery = `
    query communitySolutions($questionSlug: String!, $skip: Int!, $first: Int!, $query: String, $orderBy: TopicSortingOption, $languageTags: [String!], $topicTags: [String!]) {
        questionSolutions(
            filters: { questionSlug: $questionSlug, skip: $skip, first: $first, query: $query, orderBy: $orderBy, languageTags: $languageTags, topicTags: $topicTags }
        ) {
            hasDirectResults
            totalNum
            solutions {
                id
                title
                commentCount
                topLevelCommentCount
                viewCount
                pinned
                isFavorite
                solutionTags {
                    name
                    slug
                }
                post {
                    id
                    status
                    voteCount
                    creationDate
                    isHidden
                    author {
                        username
                        isActive
                        nameColor
                        activeBadge {
                            displayName
                            icon
                        }
                        profile {
                            userAvatar
                            reputation
                        }
                    }
                }
                searchMeta {
                    content
                    contentType
                    commentAuthor {
                        username
                    }
                    replyAuthor {
                        username
                    }
                    highlights
                }
            }
        }
    }
`;
// {"titleSlug": "two-sum"}

export const officialSolutionQuery = `
    query officialSolution($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            solution {
                id
                title
                content
                contentTypeId
                paidOnly
                hasVideoSolution
                paidOnlyVideo
                canSeeDetail
                rating {
                    count
                    average
                    userRating {
                        score
                    }
                }
                topic {
                    id
                    commentCount
                    topLevelCommentCount
                    viewCount
                    subscribed
                    solutionTags {
                        name
                        slug
                    }
                    post {
                        id
                        status
                        creationDate
                        author {
                            username
                            isActive
                            profile {
                                userAvatar
                                reputation
                            }
                        }
                    }
                }
            }
        }
    }
`;
// {"titleSlug": "two-sum"}

export const learningContextQuery = `
    query learningContext($currentQuestionSlug: String!, $categorySlug: String, $envId: String, $envType: String, $filters: QuestionListFilterInput) {
        learningContextV2(
            currentQuestionSlug: $currentQuestionSlug
            categorySlug: $categorySlug
            envId: $envId
            envType: $envType
            filters: $filters
        ) {
            name
            backLink
            nextQuestion {
                difficulty
                title
                titleSlug
                questionFrontendId
            }
            previousQuestion {
                difficulty
                title
                titleSlug
                questionFrontendId
            }
        }
    }
`;
// {"currentQuestionSlug": "two-sum", "filters": {}, "envId": "", "envType": "problem-list"}
// {"envType": "", "envId": "", "currentQuestionSlug": "two-sum"}

export const randomPanelQuestionQuery = `
    query randomPanelQuestion($currentQuestionSlug: String!, $categorySlug: String, $envId: String, $envType: String, $filters: QuestionListFilterInput) {
        randomPanelQuestion(
            currentQuestionSlug: $currentQuestionSlug
            categorySlug: $categorySlug
            envId: $envId
            envType: $envType
            filters: $filters
        )
    }
`;
// {"currentQuestionSlug": "two-sum", "filters": {}, "envId": "", "envType": "problem-list"}
// {"envType": "", "envId": "", "currentQuestionSlug": "two-sum"}

export const panelQuestionListQuery = `
    query panelQuestionList($currentQuestionSlug: String!, $categorySlug: String, $envId: String, $envType: String, $filters: QuestionListFilterInput) {
        panelQuestionList(
            currentQuestionSlug: $currentQuestionSlug
            categorySlug: $categorySlug
            envId: $envId
            envType: $envType
            filters: $filters
        ) {
            hasViewPermission
            panelName
            finishedLength
            totalLength
            questions {
                difficulty
                id
                paidOnly
                questionFrontendId
                status
                title
                titleSlug
                topicTags {
                    name
                    slug
                }
            }
        }
    }
`;
// {"currentQuestionSlug": "two-sum", "filters": {}, "envId": "", "envType": "problem-list"}
// {"envType": "", "envId": "", "currentQuestionSlug": "two-sum"}

export const updateSyncedCodeMutation = `
    mutation updateSyncedCode($code: String!, $lang: Int!, $questionId: Int!) {
        updateSyncedCode(code: $code, lang: $lang, questionId: $questionId) {
            ok
        }
    }
`;
// {"code": "class Solution:\n    def searchRange(self, nums: List[int], target: int) -> List[int]:\n        return []", "lang": 11, "questionId": 34}
// {"code": "class Solution:\n    def searchRange(self, nums: List[int], target: int) -> List[int]:\n        return [1,2]", "lang": 11, "questionId": 34}

export const questionSubmissionListQuery = `
    query questionSubmissionList($questionSlug: String!, $lang: Int, $withNote: Boolean, $limit: Int, $offset: Int, $status: Int) {
        questionSubmissionList(
            questionSlug: $questionSlug
            offset: $offset
            limit: $limit
            lang: $lang
            withNotes: $withNote
            status: $status
        ) {
            lastKey
            hasNext
            submissions {
                runtime
                memory
                timestamp
                status
                statusDisplay
                lang
                langName
                timestamp
                notes
                id
                hasNotes
                topicTags {
                    id
                    name
                    slug
                    translatedName
                }
            }
        }
    }
`;
// {"questionSlug": "two-sum", "limit": 10, "offset": 0, "lang": 11, "withNote": true, "status": 10}

export const submissionDetailsQuery = `
    query submissionDetails($submissionId: Int!) {
        submissionDetails(submissionId: $submissionId) {
            runtime
            runtimeDisplay
            runtimePercentile
            runtimeDistribution
            memory
            memoryDisplay
            memoryPercentile
            memoryDistribution
            code
            timestamp
            statusCode
            user {
                username
                profile {
                    realName
                    userAvatar
                }
            }
            lang {
                name
                verboseName
            }
            question {
                questionId
            }
            notes
            topicTags {
                tagId
                slug
                name
            }
            runtimeError
            compileError
            lastTestcase
        }
    }
`;
// {"submissionId": 989723806}

export const communitySolutionQuery = `
    query communitySolution($topicId: Int!) {
        topic(id: $topicId) {
            id
            viewCount
            topLevelCommentCount
            subscribed
            title
            pinned
            solutionTags {
                name
                slug
            }
            hideFromTrending
            commentCount
            isFavorite
            post {
                id
                voteCount
                voteStatus
                content
                updationDate
                creationDate
                status
                isHidden
                author {
                    isDiscussAdmin
                    isDiscussStaff
                    username
                    nameColor
                    activeBadge {
                        displayName
                        icon
                    }
                    profile {
                        userAvatar
                        reputation
                    }
                    isActive
                }
                authorIsModerator
                isOwnPost
            }
        }
    }
`;
// {"topicId": 3678229}

export const solutionArticleInformationQuery = `
    query solutionArticleInformation($topicId: Int!) {
        topic(id: $topicId) {
            title
            post {
                author {
                    username
                }
            }
        }
    }
`;
// {"topicId": 3678229}

export const prevNextSolutionQuery = `
    query prevNextSolution($topicId: Int!, $questionSlug: String!, $skip: Int!, $first: Int!, $query: String, $orderBy: TopicSortingOption, $languageTags: [String!], $topicTags: [String!]) {
        prevSolution(
            topicId: $topicId
            filters: { questionSlug: $questionSlug, first: $first, skip: $skip, orderBy: $orderBy, query: $query, languageTags: $languageTags, topicTags: $topicTags }
        ) {
            id
            title
        }
        nextSolution(
            topicId: $topicId
            filters: { questionSlug: $questionSlug, first: $first, skip: $skip, orderBy: $orderBy, query: $query, languageTags: $languageTags, topicTags: $topicTags }
        ) {
            id
            title
        }
    }
`;
// {"query": "", "languageTags": [], "topicTags": [], "topicId": 3678229, "topicSlug": "", "questionSlug": "two-sum", "skip": 0, "first": 15, "orderBy": "hot"}

export const intentionTagsQuery = `
    query intentionTags {
        intentionTags {
            name
            slug
        }
    }
`;

export const questionDiscussCommentsQuery = `
    query questionDiscussComments($topicId: Int!, $orderBy: String = "newest_to_oldest", $pageNo: Int = 1, $numPerPage: Int = 10) {
        topicComments(
            topicId: $topicId
            orderBy: $orderBy
            pageNo: $pageNo
            numPerPage: $numPerPage
        ) {
            data {
                id
                pinned
                pinnedBy {
                    username
                }
                post {
                    ...DiscussPost
                }
                intentionTag {
                    slug
                }
                numChildren
            }
            totalNum
        }
    }

    fragment DiscussPost on PostNode {
        id
        voteCount
        voteStatus
        content
        updationDate
        creationDate
        status
        isHidden
        coinRewards {
            id
            score
            description
            date
        }
        author {
            isDiscussAdmin
            isDiscussStaff
            username
            nameColor
            activeBadge {
                displayName
                icon
            }
            profile {
                userAvatar
                reputation
            }
            isActive
        }
        authorIsModerator
        isOwnPost
    }
`;
// {"topicId": 3678229, "pageNo": 1, "numPerPage": 10, "orderBy": "best"}
