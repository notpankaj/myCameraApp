import {registerSheet} from 'react-native-actions-sheet';
import AskQuestionSheet from './AskQuestionSheet';
import GetSubscriptionSheet from './GetSubscriptionSheet';
// import HistorySheet from './HistorySheet';
import ResultSheet from './ResultSheet';
import {
  ASK_QUESTION_SHEET,
  GET_SUBSCRIPTION_SHEET,
  HISTORY_SHEET,
  RESULT_SHEET,
} from './types';

registerSheet(ASK_QUESTION_SHEET, AskQuestionSheet);
// registerSheet(HISTORY_SHEET, HistorySheet);
registerSheet(RESULT_SHEET, ResultSheet);
registerSheet(GET_SUBSCRIPTION_SHEET, GetSubscriptionSheet);

export {};
