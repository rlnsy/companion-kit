import { EnumStringHelper } from 'common/utils/enumHelper';

export type LabelType<T = string | number> = { value: T, label: string};

export enum TipsLabels {
    Angry = 'angry',
    Annoyed = 'annoyed',
    Ashamed = 'ashamed',
    Betrayed = 'betrayed',
    Disappointed = 'disappointed',
    DontCare = 'dont_care',
    Doubtful = 'doubtful',
    Embarrassed = 'embarrassed',
    Guilty = 'guilty',
    Heartbroken = 'heartbroken',
    Helpless = 'helpless',
    Ignored = 'ignored',
    Insulted = 'insulted',
    InTrouble = 'in_trouble',
    Invisible = 'invisible',
    Lonely = 'lonely',
    Nervous = 'nervous',
    Overwhelmed = 'overwhelmed',
    Pressured = 'pressured',
    Provoked = 'provoked',
    Resentful = 'resentful',
    Restless = 'restless',
    Sad = 'sad',
    Scared = 'scared',
    Stressed = 'stressed',
    Tired = 'tired',
    Trapped = 'trapped',
    Unappreciated = 'unappreciated',
    Violent = 'violent',
    Worried = 'worried',
}

export namespace TipsLabels {
    export const Helper = new EnumStringHelper<TipsLabels>(TipsLabels);

    export const Strings: {[value: string]: string} = {
        get [TipsLabels.Angry]() { return 'Angry'; },
        get [TipsLabels.Annoyed]() { return 'Annoyed'; },
        get [TipsLabels.Ashamed]() { return 'Ashamed'; },
        get [TipsLabels.Betrayed]() { return 'Betrayed'; },
        get [TipsLabels.Disappointed]() { return 'Disappointed'; },
        get [TipsLabels.DontCare]() { return 'Don’t care'; },
        get [TipsLabels.Doubtful]() { return 'Doubtful'; },
        get [TipsLabels.Embarrassed]() { return 'Embarrassed'; },
        get [TipsLabels.Guilty]() { return 'Guilty'; },
        get [TipsLabels.Heartbroken]() { return 'Heartbroken'; },
        get [TipsLabels.Helpless]() { return 'Helpless'; },
        get [TipsLabels.Ignored]() { return 'Ignored'; },
        get [TipsLabels.Insulted]() { return 'Insulted'; },
        get [TipsLabels.InTrouble]() { return 'In trouble'; },
        get [TipsLabels.Invisible]() { return 'Invisible'; },
        get [TipsLabels.Lonely]() { return 'Lonely'; },
        get [TipsLabels.Nervous]() { return 'Nervous'; },
        get [TipsLabels.Overwhelmed]() { return 'Overwhelmed'; },
        get [TipsLabels.Pressured]() { return 'Pressured'; },
        get [TipsLabels.Provoked]() { return 'Provoked'; },
        get [TipsLabels.Resentful]() { return 'Resentful'; },
        get [TipsLabels.Restless]() { return 'Restless'; },
        get [TipsLabels.Sad]() { return 'Sad'; },
        get [TipsLabels.Scared]() { return 'Scared'; },
        get [TipsLabels.Stressed]() { return 'Stressed'; },
        get [TipsLabels.Tired]() { return 'Tired'; },
        get [TipsLabels.Trapped]() { return 'Trapped'; },
        get [TipsLabels.Unappreciated]() { return 'Unappreciated'; },
        get [TipsLabels.Violent]() { return 'Violent'; },
        get [TipsLabels.Worried]() { return 'Worried'; },
    };

    export const Labels: LabelType<TipsLabels>[] = [
        {value: TipsLabels.Angry, label: 'Angry'},
        {value: TipsLabels.Annoyed, label: 'Annoyed'},
        {value: TipsLabels.Ashamed, label: 'Ashamed'},
        {value: TipsLabels.Betrayed, label: 'Betrayed'},
        {value: TipsLabels.Disappointed, label: 'Disappointed'},
        {value: TipsLabels.DontCare, label: 'Don’t care'},
        {value: TipsLabels.Doubtful, label: 'Doubtful'},
        {value: TipsLabels.Embarrassed, label: 'Embarrassed'},
        {value: TipsLabels.Guilty, label: 'Guilty'},
        {value: TipsLabels.Heartbroken, label: 'Heartbroken'},
        {value: TipsLabels.Helpless, label: 'Helpless'},
        {value: TipsLabels.Ignored, label: 'Ignored'},
        {value: TipsLabels.Insulted, label: 'Insulted'},
        {value: TipsLabels.InTrouble, label: 'In trouble'},
        {value: TipsLabels.Invisible, label: 'Invisible'},
        {value: TipsLabels.Lonely, label: 'Lonely'},
        {value: TipsLabels.Nervous, label: 'Nervous'},
        {value: TipsLabels.Overwhelmed, label: 'Overwhelmed'},
        {value: TipsLabels.Pressured, label: 'Pressured'},
        {value: TipsLabels.Provoked, label: 'Provoked'},
        {value: TipsLabels.Resentful, label: 'Resentful'},
        {value: TipsLabels.Restless, label: 'Restless'},
        {value: TipsLabels.Sad, label: 'Sad'},
        {value: TipsLabels.Scared, label: 'Scared'},
        {value: TipsLabels.Stressed, label: 'Stressed'},
        {value: TipsLabels.Tired, label: 'Tired'},
        {value: TipsLabels.Trapped, label: 'Trapped'},
        {value: TipsLabels.Unappreciated, label: 'Unappreciated'},
        {value: TipsLabels.Violent, label: 'Violent'},
        {value: TipsLabels.Worried, label: 'Worried'},
    ];
}
