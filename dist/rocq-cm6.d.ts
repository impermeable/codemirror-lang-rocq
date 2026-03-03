/************************************************************************/
/************************************************************************/
import { LanguageSupport, StreamLanguage, StringStream } from "@codemirror/language";
import { Tag } from "@lezer/highlight";
export declare const vernacTag: Tag;
export declare const tacticTag: Tag;
export declare const terminatorTag: Tag;
export declare const bulletTag: Tag;
export declare const focusTag: Tag;
export declare const admitTag: Tag;
interface RocqCMState {
    begin_sentence: boolean;
    is_head: boolean;
    sentence_kind: string | null;
    commentLevel: number;
    tokenize: (stream: StringStream, state: RocqCMState) => string | null;
}
declare function tokenBase(stream: StringStream, state: RocqCMState): string | null;
export declare const rocqParser: StreamLanguage<{
    begin_sentence: boolean;
    is_head: boolean;
    sentence_kind: null;
    tokenize: typeof tokenBase;
    commentLevel: number;
}>;
export declare function rocq(): LanguageSupport;
export {};
