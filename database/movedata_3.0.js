// ============================================================
//  movedata_3.0.js — 星之翼 技データベース（コスト 3.0）
// ============================================================

const MOVE_DATA_3_0 = [
  {
    id: "3.0_c001",
    status: {"hp":2952,"boostCount":10,"boostDist":0,"lockDist":33},
    moves: [
        {
            "name": "追従式ビット",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 374,
            "note": "2発(3凸で3)。キャンセルしても撃ち続ける2×10連射のマシンガン"
        },
        {
            "name": "鷲翼鋼翔",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 593,
            "note": "展開した羽根が時間差突撃"
        },
        {
            "name": "飛翔",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "誘導切りのある浮上から飛翔に移行"
        },
        {
            "name": "追従式ビット(飛翔)",
            "input": "飛翔中メイン射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 345,
            "note": "2連装狙撃ビーム。レバー入れで移動しながら射撃"
        },
        {
            "name": "鷲翼鋼翔(飛翔)",
            "input": "飛翔中サブ射撃",
            "startup": 0,
            "hitbox": "普通",
            "dmg": 322,
            "note": "やや後退しつつ竜巻を放つ。ダウン拾い属性"
        },
        {
            "name": "鷲翼鋼翔(飛翔・後)",
            "input": "飛翔中後サブ射撃",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 411,
            "note": "オールレンジ照射ビーム2連射"
        },
        {
            "name": "飛翔解除",
            "input": "飛翔中サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "その場で急降下"
        },
        {
            "name": "羽鷲乱舞",
            "input": "N格闘",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 451,
            "note": "1入力で最後まで出し切る"
        },
        {
            "name": "鷲爪迅撃",
            "input": "N格闘→射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 552,
            "note": "素早い連続キック"
        },
        {
            "name": "鷲爪迅撃(2段目)",
            "input": "N格闘(2段目)→射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 541,
            "note": ""
        },
        {
            "name": "落ち羽の回転",
            "input": "N格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 894,
            "note": "スタン狙撃から羽根で追撃"
        },
        {
            "name": "落ち羽の回転(2段目)",
            "input": "N格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 849,
            "note": ""
        },
        {
            "name": "蒼穹の歌",
            "input": "N格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 528,
            "note": "派生後飛翔状態に移行"
        },
        {
            "name": "蒼穹の歌(2段目)",
            "input": "N格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 520,
            "note": ""
        },
        {
            "name": "羽鷲乱舞",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 525,
            "note": "高速乱舞で打ち上げる"
        },
        {
            "name": "鷲爪迅撃",
            "input": "横格闘→射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 534,
            "note": ""
        },
        {
            "name": "落ち羽の回転",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 842,
            "note": ""
        },
        {
            "name": "蒼穹の歌",
            "input": "横格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 513,
            "note": ""
        },
        {
            "name": "鷲爪乱舞",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 413,
            "note": "判定出しっぱなしで突撃"
        },
        {
            "name": "鷲爪迅撃",
            "input": "前格闘(2hit〜)→射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 467,
            "note": ""
        },
        {
            "name": "蒼穹の歌",
            "input": "前格闘(2hit〜)→サブ格闘派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 437,
            "note": ""
        },
        {
            "name": "鷲爪乱舞(飛翔)",
            "input": "飛翔中N格闘",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 540,
            "note": "ダウン拾い可能な飯綱落とし"
        },
        {
            "name": "鷲爪迅撃",
            "input": "飛翔中N格闘→射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 696,
            "note": ""
        },
        {
            "name": "落ち羽の回転",
            "input": "飛翔中N格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 774,
            "note": ""
        },
        {
            "name": "蒼穹の歌",
            "input": "飛翔中N格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 699,
            "note": ""
        },
        {
            "name": "羽鷲乱舞(飛翔)",
            "input": "飛翔中前格闘",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 488,
            "note": "多段ヒットする高速回転斬り。最終段前まで通常時N・横格にキャンセル可能"
        },
        {
            "name": "鷲爪迅撃",
            "input": "飛翔中前格闘→射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 732,
            "note": ""
        },
        {
            "name": "落ち羽の回転",
            "input": "飛翔中前格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 883,
            "note": ""
        },
        {
            "name": "蒼穹の歌",
            "input": "飛翔中前格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 721,
            "note": ""
        },
        {
            "name": "羽鷲乱舞・突撃(飛翔)",
            "input": "飛翔中後格闘",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 438,
            "note": "判定強めの迎撃格闘"
        },
        {
            "name": "鷲爪迅撃",
            "input": "飛翔中後格闘→射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 690,
            "note": ""
        },
        {
            "name": "落ち羽の回転",
            "input": "飛翔中後格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 862,
            "note": ""
        },
        {
            "name": "蒼穹の歌",
            "input": "飛翔中後格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 681,
            "note": ""
        },
        {
            "name": "ハーピィの狂乱",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 1140,
            "note": "初段の伸びと速度が悪い。火力底上げ用の乱舞系格闘。F/S/B/MD:1140/1035"
        },
        {
            "name": "ハーピィの狂乱(飛翔)",
            "input": "飛翔中バーストアタック",
            "startup": 0,
            "hitbox": "通常",
            "dmg": 1152,
            "note": "5凸で解禁。相手を引きずった後打ち上げて撃ち抜く。F/S/B/MD:1152/1048"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c002",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "ビームキャノン",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 225,
            "note": "振り向き撃ちのないビームライフル。弾数6(8)"
        },
        {
            "name": "ロングライフル",
            "input": "Nサブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 378,
            "note": "足を止めて射撃。凸により性質変化"
        },
        {
            "name": "ビームキャノン・側転",
            "input": "横サブ射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 210,
            "note": "側転しながら射撃。メインへのキャンセルあり。弾数1(2)"
        },
        {
            "name": "ロングライフル・バースト",
            "input": "後格闘",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 667,
            "note": "細い照射。サブ格中はビットからも照射"
        },
        {
            "name": "盛装レガリア",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 337,
            "note": "プレッシャーを発動しつつ時限強化。消費100"
        },
        {
            "name": "ビームキャノン・斉射",
            "input": "盛装状態中 Nサブ格闘",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 585,
            "note": "ビットを並べて横に広い照射ビーム"
        },
        {
            "name": "ビームキャノン・包囲",
            "input": "盛装状態中 後サブ格闘",
            "startup": 0,
            "hitbox": "ファンネル",
            "dmg": 426,
            "note": "包囲ファンネル"
        },
        {
            "name": "未知なる格闘術",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 534,
            "note": "切り抜け後納刀して爆破。NN"
        },
        {
            "name": "ロングライフル",
            "input": "メイン格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 615,
            "note": "射撃版とは性能が異なるが、凸によりこちらも強化"
        },
        {
            "name": "ロングライフル(2段目1hit目)",
            "input": "メイン格闘(2段目1hit目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 693,
            "note": ""
        },
        {
            "name": "ロングライフル(2段目完了後)",
            "input": "メイン格闘(2段目完了後)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 759,
            "note": ""
        },
        {
            "name": "未知なる格闘術",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 510,
            "note": "2入力3段格闘。最終段バウンドダウン。横N"
        },
        {
            "name": "ロングライフル",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 600,
            "note": ""
        },
        {
            "name": "ロングライフル(横N→)",
            "input": "横格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 735,
            "note": ""
        },
        {
            "name": "未知なる格闘術",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 210,
            "note": "単発の蹴り上げ"
        },
        {
            "name": "ロングライフル",
            "input": "前格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 615,
            "note": ""
        },
        {
            "name": "全弾発射・ヒカリ",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 1038,
            "note": "斜め左右にゲロビを撃ち中央へ交差。発動後時限強化状態になる。BS/FMD:1038/824"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c003",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "クロスボウ",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 449,
            "note": "クロスボウから矢を9連射"
        },
        {
            "name": "クロスボウ・バレルランチャー",
            "input": "Nサブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 510,
            "note": "溜め撃ち可能。特定武装からキャンセルで性質変化。弾数1(4凸時2)"
        },
        {
            "name": "クロスボウ・連射",
            "input": "横/後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 375,
            "note": "入力方向に移動しながらスタン矢を3連射"
        },
        {
            "name": "クロスボウ・散射",
            "input": "Nサブ格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 337,
            "note": "アップデートで追加。高誘導弾を一斉発射"
        },
        {
            "name": "クロスボウ・散射(横)",
            "input": "横サブ格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 195,
            "note": "扇状に5本のスタン矢を発射"
        },
        {
            "name": "クロスボウ・クラスターアロー",
            "input": "後サブ格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 307,
            "note": "1凸で解禁。敵の頭上から矢の雨を降らせる"
        },
        {
            "name": "エルフの剣術",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 526,
            "note": "剣で斬りつけてから矢で追撃。NNN"
        },
        {
            "name": "踏み撃ち",
            "input": "メイン格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 729,
            "note": "5凸で解禁。サブ長押しで威力増加"
        },
        {
            "name": "踏み撃ち(2段目)",
            "input": "メイン格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 776,
            "note": ""
        },
        {
            "name": "エルフの剣術",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 499,
            "note": "横斬りの後回し蹴りから矢で追撃。横N"
        },
        {
            "name": "踏み撃ち",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 749,
            "note": ""
        },
        {
            "name": "優雅かつ華麗に",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 925,
            "note": "細かく移動しながらの6連射。1発毎に誘導がかかり直す。SB/FMDC:925/840"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c004",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "天使武装・銃",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 225,
            "note": "普通のBR"
        },
        {
            "name": "天使武装・銃(背面)",
            "input": "背面メイン射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 383,
            "note": "振り向き撃ち時は二丁撃ち"
        },
        {
            "name": "非情な厳罰",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 345,
            "note": "単発ダウン"
        },
        {
            "name": "罪に問う鞭打ち",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 623,
            "note": "ビーム14連射、1発毎に再誘導"
        },
        {
            "name": "天使進軍",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "前方の射撃を防ぐオーラを纏い突撃"
        },
        {
            "name": "天使進軍【反撃】",
            "input": "射撃防御時 天使進軍",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 90,
            "note": "射撃を防いだ際に衝撃波で反撃する"
        },
        {
            "name": "裁定の剣",
            "input": "射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 150,
            "note": "レバー入力方向に移動してスタン属性の剣を発射。弾数2"
        },
        {
            "name": "障害粛清",
            "input": "サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 278,
            "note": "その場で極短射程の射撃をばら撒く"
        },
        {
            "name": "裁定の剣",
            "input": "ガード中射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 150,
            "note": "サブ格闘射撃派生と同様。弾数2"
        },
        {
            "name": "天使武装・剣",
            "input": "通常格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 626,
            "note": "標準的な2入力3段格闘。NN"
        },
        {
            "name": "審判・銃",
            "input": "通常格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 970,
            "note": "5凸で解禁。カット耐性0の高火力派生。最終段前までの間で派生可、長押しで攻撃延長"
        },
        {
            "name": "審判・銃(2段目)",
            "input": "通常格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 935,
            "note": ""
        },
        {
            "name": "審判・剣",
            "input": "通常格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 772,
            "note": "切り抜けスタン→爆発。4凸で威力上昇&強制ダウン化。最終段前までの間で派生可"
        },
        {
            "name": "審判・剣(2段目)",
            "input": "通常格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 818,
            "note": "4凸時威力。799〜818"
        },
        {
            "name": "天使武装・剣",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 552,
            "note": "良く動く。バウンドダウン。横N"
        },
        {
            "name": "審判・銃",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 970,
            "note": "5凸で解禁。蹴り落とし前までの間で派生可能"
        },
        {
            "name": "審判・銃(2段目)",
            "input": "横格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 931,
            "note": ""
        },
        {
            "name": "審判・剣",
            "input": "横格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 772,
            "note": "4凸で威力上昇&強制ダウン化。蹴り落とし前までの間で派生可能"
        },
        {
            "name": "審判・剣(2段目)",
            "input": "横格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 814,
            "note": "4凸時威力。792〜814"
        },
        {
            "name": "天使武装・剣",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 225,
            "note": "前隙はあるが強判定突進"
        },
        {
            "name": "天使の力・ケルビム",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 1210,
            "note": "乱舞系。F/S/B/MD:1210/1026/1125/1019"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c005",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "斬龍",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 480,
            "note": "斬撃を1波飛ばす。足止め武装だが慣性が良く乗り、滑る。4凸で溜め可能になり威力・ヒット数上昇。弾数4"
        },
        {
            "name": "虚剣・周",
            "input": "後メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 461,
            "note": "ブーメランのような剣を投げる。最大10hit。投げたときに反動で後退、空中では慣性を残して落下"
        },
        {
            "name": "虚剣・解",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "ファンネル",
            "dmg": 502,
            "note": "背中から敵を追尾する緑色の剣を真上方向へ飛ばす。8Hitで強制ダウン。足止めだが射出中は慣性継続。弾数12"
        },
        {
            "name": "虚剣・列",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 444,
            "note": "足を止めて、順次射出される剣を頭上に5本召喚する"
        },
        {
            "name": "虚剣・銘",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 210,
            "note": "オレンジ色の剣を敵へ向かって投げ設置させる"
        },
        {
            "name": "帰匣",
            "input": "虚剣・銘設置中 サブ格闘(追加入力)",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "設置した剣の元へ瞬間移動、誘導切りあり"
        },
        {
            "name": "鷹撃",
            "input": "虚剣・銘設置中 サブ格入力",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 195,
            "note": "敵との距離が一定以下時、敵の背後へ瞬間移動し斬撃を繰り出す"
        },
        {
            "name": "擎天",
            "input": "後サブ格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 240,
            "note": "1凸で解放。地面に剣を突き刺し、ロックした相手の足元から巨大な剣を召喚。接地判定あり。射程33?"
        },
        {
            "name": "天星虚剣",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 568,
            "note": "1、2段目からサブ格闘派生、サブ射撃派生(5凸)あり。NNN"
        },
        {
            "name": "星送",
            "input": "メイン格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 639,
            "note": "5凸で解放。無敵時間のある瞬間移動をしながら切り抜ける乱舞技。出し切り強制ダウン。周囲の敵味方を巻き込む"
        },
        {
            "name": "星送(2段目)",
            "input": "メイン格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 714,
            "note": ""
        },
        {
            "name": "燕帰",
            "input": "メイン格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 609,
            "note": "カット耐性とダメージ効率が良い。相手を高く打ち上げ、瞬間移動し上空から切り抜け"
        },
        {
            "name": "燕帰(2段目)",
            "input": "メイン格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 703,
            "note": ""
        },
        {
            "name": "虚剣・華",
            "input": "メイン格闘→サブ格闘派生(虚剣・銘設置中)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 827,
            "note": "サブ格設置中は性能変化。相手を真上に打ち上げ緑の剣を複数飛ばして追撃。強制ダウン"
        },
        {
            "name": "虚剣・華(2段目)",
            "input": "メイン格闘(2段目)→サブ格闘派生(虚剣・銘設置中)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 855,
            "note": ""
        },
        {
            "name": "天星虚剣",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 652,
            "note": "サブ格闘設置中は性能変化。横NN。カッコ内509は未強化時？"
        },
        {
            "name": "星送",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 640,
            "note": ""
        },
        {
            "name": "星送(2段目)",
            "input": "横格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 753,
            "note": ""
        },
        {
            "name": "燕帰",
            "input": "横格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 610,
            "note": ""
        },
        {
            "name": "燕帰(2段目)",
            "input": "横格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 742,
            "note": ""
        },
        {
            "name": "虚剣・華",
            "input": "横格闘→サブ格闘派生(虚剣・銘設置中)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 828,
            "note": ""
        },
        {
            "name": "虚剣・華(2段目)",
            "input": "横格闘(2段目)→サブ格闘派生(虚剣・銘設置中)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 878,
            "note": ""
        },
        {
            "name": "天星虚剣",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 450,
            "note": "弾数制の巨大な剣を振り下ろす1段格闘。長押しで威力アップ"
        },
        {
            "name": "虚剣行",
            "input": "覚醒技(バーストアタック)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 1212,
            "note": "射撃・瞬間移動を伴う乱舞技。F/S/B/MD:1212/1012/1114/1012"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c006",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "フラワーフェアリー",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 228,
            "note": "3つのビットから同時射撃。弾数5(7)。カッコ内84x3"
        },
        {
            "name": "フラワーフェアリー(満開時)",
            "input": "満開時メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 436,
            "note": "追従ビットから追加射撃"
        },
        {
            "name": "フラワーフェアリー&騎士の槍",
            "input": "背面メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 371,
            "note": "ビットに加えて本体もマシンガン連射"
        },
        {
            "name": "フラワーフェアリー&騎士の槍(満開時)",
            "input": "満開時背面メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 394,
            "note": "12連射+追従ビットから追加射撃"
        },
        {
            "name": "赤花ガーディアン",
            "input": "Nサブ射撃",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 228,
            "note": "設置アシスト。メインキャンセル可能"
        },
        {
            "name": "赤花ガーディアン(満開時)",
            "input": "満開時サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 338,
            "note": "左右から同時連射"
        },
        {
            "name": "花粉ストーム",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 472,
            "note": "誘導ミサイル一斉発射"
        },
        {
            "name": "花粉ストーム(満開時)",
            "input": "満開時後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 472,
            "note": "ミサイル増加+追従ビットから追加射撃"
        },
        {
            "name": "投げ槍",
            "input": "後メイン格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 345,
            "note": "単発ダウンの投擲"
        },
        {
            "name": "投げ槍(満開時)",
            "input": "満開時後メイン格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 345,
            "note": "ビットからの支援射撃が追加。84x2追加"
        },
        {
            "name": "エナジーリリース",
            "input": "Nサブ格闘",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 630,
            "note": "2連装照射ビーム"
        },
        {
            "name": "エナジーリリース(満開時)",
            "input": "満開時Nサブ格闘",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 705,
            "note": "爆風付き照射ビーム"
        },
        {
            "name": "赤花満開",
            "input": "後サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "射撃シールド付きの時限強化。シールド耐久400。消費100"
        },
        {
            "name": "騎士の槍",
            "input": "通常格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 624,
            "note": "1タップで最後まで出し切る"
        },
        {
            "name": "槍と矢",
            "input": "通常格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 600,
            "note": "凸2で解放。斬り抜け&スタンビーム"
        },
        {
            "name": "槍と矢(満開時)",
            "input": "通常格闘→サブ射撃派生(満開時)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 733,
            "note": "高威力"
        },
        {
            "name": "審判",
            "input": "通常格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 626,
            "note": "満開ゲージを補充"
        },
        {
            "name": "審判(満開時)",
            "input": "通常格闘→サブ格闘派生(満開時)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 755,
            "note": "満開状態を解除しつつ拘束"
        },
        {
            "name": "騎士の槍",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 727,
            "note": "横NN"
        },
        {
            "name": "槍と矢",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 573,
            "note": ""
        },
        {
            "name": "槍と矢(満開時)",
            "input": "横格闘→サブ射撃派生(満開時)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 719,
            "note": ""
        },
        {
            "name": "審判",
            "input": "横格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 581,
            "note": ""
        },
        {
            "name": "審判(満開時)",
            "input": "横格闘→サブ格闘派生(満開時)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 735,
            "note": ""
        },
        {
            "name": "ジャスティスアサルト",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 480,
            "note": "掴み属性の変則ピョン格"
        },
        {
            "name": "新たな物語",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 948,
            "note": "満開状態になりつつ照射&一斉発射。SB/FMD:948/844"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c007",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "コントローラー射撃",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 217,
            "note": "2ヒットよろけ。連射可能。振り向き撃ち時は最大まで自動連射。弾数12(1凸時18)"
        },
        {
            "name": "ビームガン・散射",
            "input": "チャージメイン格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 494,
            "note": "足を止めて撃つショットガン"
        },
        {
            "name": "ミサイルポッド・斉射",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 516,
            "note": "ミサイル連射。弾数1(5凸時2)"
        },
        {
            "name": "ガトリング・速射",
            "input": "横サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 455,
            "note": "滑りながら射撃。3凸時はミサイル追加"
        },
        {
            "name": "キャノン",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 345,
            "note": "射撃シールド付きの単発射撃"
        },
        {
            "name": "ビームガン・照射",
            "input": "後メイン格闘",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 648,
            "note": "曲げ撃ち可能な照射ビーム"
        },
        {
            "name": "アサルトモード",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "アサルトモードへ移行する"
        },
        {
            "name": "ガトリング・制圧",
            "input": "アサルトモード メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 427,
            "note": "1クリックで全て吐き出す。弾数が少なくなるごとに連射数低下。弾数100"
        },
        {
            "name": "キャノン・機動",
            "input": "アサルトモード サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 285,
            "note": "3連射可能"
        },
        {
            "name": "ビームガン・掃射",
            "input": "アサルトモード 格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 210,
            "note": "スタン属性のビーム鞭。横入れで方向指定"
        },
        {
            "name": "遮断射撃",
            "input": "アサルトモード 後格闘",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 648,
            "note": "足を止めて3方向にビーム照射"
        },
        {
            "name": "一斉射撃",
            "input": "アサルトモード サブ格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 643,
            "note": "動きながら全武装連射。ダメージにムラが出やすい"
        },
        {
            "name": "大型フォルディングソード",
            "input": "通常格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 504,
            "note": "機敏に出し切る。出し切りバウンド。NNN"
        },
        {
            "name": "大型フォルディングソード",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 354,
            "note": "1入力2段"
        },
        {
            "name": "大型フォルディングソード",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 169,
            "note": "多段ヒットする突き1段"
        },
        {
            "name": "一斉射撃・リミッター解除",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 864,
            "note": "全ての武装を順に撃ち込む。ダメージにムラが出やすい。SB/FMDC:864/784?"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c008",
    status: {"hp":2953,"boostCount":10,"boostDist":0,"lockDist":31},
    moves: [
        {
            "name": "天使武装・銃",
            "input": "メイン射撃",
            "startup": 7,
            "hitbox": "ビーム",
            "dmg": 225,
            "note": "弾数少なめ"
        },
        {
            "name": "ビット・追撃",
            "input": "サブ射撃",
            "startup": 11,
            "hitbox": "ビーム",
            "dmg": 388,
            "note": "太めの弾を撃ち出し、時間差でビットが追撃"
        },
        {
            "name": "ビット・照射",
            "input": "後サブ射撃中連動",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 405,
            "note": "サブ射撃にビットが連動攻撃(照射)。後サブ射撃50消費"
        },
        {
            "name": "ビット・突撃",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 408,
            "note": "開幕時は0。50以上で使用可能。使用時に50消費"
        },
        {
            "name": "天使武装・銃(派生)",
            "input": "メイン射撃派生",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 473,
            "note": "自由落下しつつ3連射。振り向き撃ち時は3発同時発射"
        },
        {
            "name": "試練・剣",
            "input": "後格闘",
            "startup": 10,
            "hitbox": "強実弾",
            "dmg": 240,
            "note": "3方向にスタン属性の剣を投擲。各サブ格闘からキャンセル時は左右2方向"
        },
        {
            "name": "ビット・突撃(連動)",
            "input": "後サブ射撃中連動(後格闘)",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 345,
            "note": "1凸で解禁、後格闘にビットが連動攻撃(突撃)。連動時に後サブ射撃35消費"
        },
        {
            "name": "天使武装・銃&剣",
            "input": "通常格闘",
            "startup": 7,
            "hitbox": "普通",
            "dmg": 606,
            "note": "2ボタン5段格闘。NN"
        },
        {
            "name": "有終の美",
            "input": "通常格闘→射撃派生",
            "startup": 0,
            "hitbox": "普通",
            "dmg": 630,
            "note": "最終段Hitで後サブ射撃を15回復"
        },
        {
            "name": "有終の美(2段目1hit目)",
            "input": "通常格闘(2段目1hit目)→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 682,
            "note": ""
        },
        {
            "name": "有終の美(2段目2hit目)",
            "input": "通常格闘(2段目2hit目)→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 729,
            "note": ""
        },
        {
            "name": "試練・銃",
            "input": "通常格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 873,
            "note": "5凸で解禁。長押しで追撃数増加。ヒット数に応じ後サブ射撃を10～25回復"
        },
        {
            "name": "試練・銃(2段目1hit目)",
            "input": "通常格闘(2段目1hit目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 868,
            "note": ""
        },
        {
            "name": "試練・銃(2段目2hit目)",
            "input": "通常格闘(2段目2hit目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 870,
            "note": ""
        },
        {
            "name": "天使の進軍",
            "input": "通常格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 674,
            "note": "最終段Hitで後サブ射撃を20回復"
        },
        {
            "name": "天使の進軍(2段目1hit目)",
            "input": "通常格闘(2段目1hit目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 711,
            "note": ""
        },
        {
            "name": "天使の進軍(2段目2hit目)",
            "input": "通常格闘(2段目2hit目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 753,
            "note": ""
        },
        {
            "name": "天使武装・銃&剣",
            "input": "横格闘",
            "startup": 9,
            "hitbox": "普通",
            "dmg": 597,
            "note": "初段5hit目以降から最終段前まで派生可能。横N"
        },
        {
            "name": "有終の美",
            "input": "横格闘→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 630,
            "note": ""
        },
        {
            "name": "有終の美(横N)",
            "input": "横格闘(2段目)→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 710,
            "note": ""
        },
        {
            "name": "試練・銃",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 885,
            "note": ""
        },
        {
            "name": "試練・銃(横N)",
            "input": "横格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 845,
            "note": ""
        },
        {
            "name": "天使の進軍",
            "input": "横格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 688,
            "note": ""
        },
        {
            "name": "天使の進軍(横N)",
            "input": "横格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 735,
            "note": ""
        },
        {
            "name": "天使武装・銃&剣",
            "input": "前格闘",
            "startup": 7,
            "hitbox": "普通",
            "dmg": 584,
            "note": "長押しで追撃数変化"
        },
        {
            "name": "有終の美",
            "input": "前格闘(1)→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 542,
            "note": ""
        },
        {
            "name": "試練・銃",
            "input": "前格闘(1)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 855,
            "note": ""
        },
        {
            "name": "天使の進軍",
            "input": "前格闘(1)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 661,
            "note": ""
        },
        {
            "name": "銃剣乱舞",
            "input": "サブ格闘",
            "startup": 11,
            "hitbox": "普通",
            "dmg": 231,
            "note": "判定持続。最大7Hit"
        },
        {
            "name": "下斬り",
            "input": "サブ格闘→サブ格闘派生",
            "startup": 21,
            "hitbox": "強",
            "dmg": 240,
            "note": "接地判定有り"
        },
        {
            "name": "天使武装・銃",
            "input": "サブ格闘→射撃派生",
            "startup": 7,
            "hitbox": "ビーム",
            "dmg": 473,
            "note": "自由落下しつつ3連射"
        },
        {
            "name": "大胆不敵",
            "input": "横サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 225,
            "note": "前方に射撃バリア判定。弾数2"
        },
        {
            "name": "天使の進軍",
            "input": "横サブ格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 657,
            "note": ""
        },
        {
            "name": "天使の進軍",
            "input": "後サブ格闘",
            "startup": 15,
            "hitbox": "特殊",
            "dmg": 629,
            "note": "前方に射撃バリア判定。2段階チャージ可。最大時の最終段Hitで後サブ射撃を20回復。弾数2"
        },
        {
            "name": "天使の力・ラジエル",
            "input": "覚醒技(バーストアタック)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 948,
            "note": "斬撃から射撃属性の突撃乱舞。入力と出し切り時で後サブ射をそれぞれ30回復。hit数不安定。F/MD/S/B:870/848/879/948"
        },
        {
            "name": "天使の力・ラジエル(照射)",
            "input": "後サブ射撃中 覚醒技",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 735,
            "note": "展開中のビットと同時に照射"
        },
        {
            "name": "天使の進軍c1",
            "input": "後サブ格闘",
            "startup": 17,
            "hitbox": "強",
            "dmg": 288,
            "note": "打撃と射撃の複合攻撃。距離次第では盾を正面から崩せる。"
        },
        {
            "name": "天使の進軍c2",
            "input": "後サブ格闘",
            "startup": 33,
            "hitbox": "強",
            "dmg": 615,
            "note": "強判定の掴み属性。スパアマと一部持続技以外には引き分け以上の結果になる。"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c009",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "影を行く",
            "input": "パッシブスキル",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "地走系操作になる。空中ブーストは徐々に落下"
        },
        {
            "name": "影刃",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 384,
            "note": "3Way実弾"
        },
        {
            "name": "影襲",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "分身を作る特殊移動。再入力で接近"
        },
        {
            "name": "影刃・瞬",
            "input": "後格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 150,
            "note": "命中対象をマーク"
        },
        {
            "name": "瞬移",
            "input": "サブ格派生(マーク時)",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "マークした相手の背後に瞬間移動"
        },
        {
            "name": "影刃・破",
            "input": "射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 360,
            "note": "着弾地点に爆風を発生させる実弾投擲。弾数2"
        },
        {
            "name": "影刃",
            "input": "分身連動攻撃(格闘動作)",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 90,
            "note": "分身がナイフ投擲。2凸で3Way"
        },
        {
            "name": "乱刃",
            "input": "分身連動攻撃(射撃動作)",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 120,
            "note": "分身が突撃"
        },
        {
            "name": "紅蛇",
            "input": "Nサブ射撃",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 459,
            "note": "弾数性の鞭。Nサブ射x2"
        },
        {
            "name": "紅蛇・舞",
            "input": "横サブ射撃",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 363,
            "note": "横薙ぎ2連"
        },
        {
            "name": "影襲・背刺",
            "input": "各サブ射撃→N格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 569,
            "note": "各サブ命中から派生可能"
        },
        {
            "name": "乱刃",
            "input": "通常格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 630,
            "note": "NNN"
        },
        {
            "name": "追狩",
            "input": "通常格闘→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 506,
            "note": "受け身不能"
        },
        {
            "name": "追狩(2段目)",
            "input": "通常格闘(2段目)→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 625,
            "note": ""
        },
        {
            "name": "紅蛇・絞殺",
            "input": "通常格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 779,
            "note": "3凸で解禁"
        },
        {
            "name": "紅蛇・絞殺(2段目)",
            "input": "通常格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 845,
            "note": ""
        },
        {
            "name": "影襲・疾走",
            "input": "通常格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 467,
            "note": "分身を生成"
        },
        {
            "name": "影襲・疾走(2段目)",
            "input": "通常格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 625,
            "note": ""
        },
        {
            "name": "乱刃",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 604,
            "note": "吹き飛ばして相手に分身で追撃。横N"
        },
        {
            "name": "追狩",
            "input": "横格闘→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 491,
            "note": ""
        },
        {
            "name": "追狩(2段目)",
            "input": "横格闘(2段目)→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 677,
            "note": ""
        },
        {
            "name": "紅蛇・絞殺",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 764,
            "note": ""
        },
        {
            "name": "紅蛇・絞殺(2段目)",
            "input": "横格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 847,
            "note": ""
        },
        {
            "name": "影襲・疾走",
            "input": "横格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 453,
            "note": ""
        },
        {
            "name": "影襲・疾走(2段目)",
            "input": "横格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 654,
            "note": ""
        },
        {
            "name": "乱刃",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 426,
            "note": "BD格操作でフワ格に動作変化。前N"
        },
        {
            "name": "急襲",
            "input": "前格闘→射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 521,
            "note": ""
        },
        {
            "name": "紅蛇・絞殺",
            "input": "前格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 794,
            "note": ""
        },
        {
            "name": "影襲・疾走",
            "input": "前格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 483,
            "note": ""
        },
        {
            "name": "無間影獄",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 953,
            "note": "5凸時HP500未満で強化。F/S/B/MDC:/953/"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c010",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "不滅の竜",
            "input": "パッシブスキル",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "各武装の使用回数/ヒット回数に応じて武装が進化。スターバースト時に全武装が限界進化状態に強化、終了後ゲージ25回収"
        },
        {
            "name": "魔竜の咆哮",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 225,
            "note": "弾が大きなBR。弾数7(9)"
        },
        {
            "name": "魔竜の咆哮(進化後)",
            "input": "進化後 メイン射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 240,
            "note": "高火力良補正、着弾時に爆風(195)。バースト中：弾速と爆風範囲強化"
        },
        {
            "name": "魔竜の翼【ビット突撃】",
            "input": "サブ格進化後 メイン連動",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 180,
            "note": "ビットが連動して突撃"
        },
        {
            "name": "魔竜の吐息",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 394,
            "note": "足を止めて撃つビーム。バースト中：1タップ2連射"
        },
        {
            "name": "魔竜の翼【回転斬り】",
            "input": "サブ格進化後 サブ射連動",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 38,
            "note": "ビットを左右に発射し切り刻む。38〜"
        },
        {
            "name": "プレリュード",
            "input": "後サブ射撃(サブ射進化後)",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 680,
            "note": "3方向に照射、サブ格進化時5方向に照射。バースト中：爆風追加"
        },
        {
            "name": "魔竜の爪牙",
            "input": "通常格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 499,
            "note": "他の武装に干渉せず撃てるミサイル。バースト中：弾数48に増加。弾数32"
        },
        {
            "name": "魔竜の翼",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "Nで宙返り、左右で入力方向に1回転しながら移動。サブ格進化時機動力向上"
        },
        {
            "name": "魔竜の翼【ミサイル】",
            "input": "サブ格連動",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 488,
            "note": "移動時にミサイル2発射出。1凸で誘導切り追加。バースト中：弾数無制限"
        },
        {
            "name": "コンチェルト",
            "input": "サブ射進化後 後サブ射派生",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 120,
            "note": "滑空しながら地上へ照射。バースト中：爆風追加。120〜"
        },
        {
            "name": "バリエーション",
            "input": "後格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 210,
            "note": "横鞭。当てると格闘の進化ゲージ増加"
        },
        {
            "name": "バリエーション【ミサイル】",
            "input": "格闘進化後 後格闘連動",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 488,
            "note": "尻尾のビットを設置してミサイル連射"
        },
        {
            "name": "終焉の竜詩",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 0,
            "note": "相手を打ち上げて照射。FMD/SB"
        },
        {
            "name": "黄昏の協奏",
            "input": "後バーストアタック",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 916,
            "note": "5凸で解禁、飛び上がって巨大な爆風付き照射。//916"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c011",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "エルフの槍光",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 210,
            "note": "最大2連射。弾数4(6)"
        },
        {
            "name": "エルフ槍術-貫星",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 315,
            "note": "移動速度低下を付与"
        },
        {
            "name": "立ち入り禁止",
            "input": "横サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 165,
            "note": ""
        },
        {
            "name": "幻影同行",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "消費100"
        },
        {
            "name": "幻影槍",
            "input": "射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 225,
            "note": "弾数4(6)"
        },
        {
            "name": "エルフ槍術-裂岩",
            "input": "前格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 534,
            "note": ""
        },
        {
            "name": "エルフ槍術",
            "input": "通常格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 767,
            "note": "NNNN"
        },
        {
            "name": "エルフ槍術-激流",
            "input": "通常格闘→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 574,
            "note": "ヒット数にブレがある"
        },
        {
            "name": "エルフ槍術-激流(2段目)",
            "input": "通常格闘(2段目)→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 644,
            "note": ""
        },
        {
            "name": "エルフ槍術-激流(3段目)",
            "input": "通常格闘(3段目)→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 727,
            "note": ""
        },
        {
            "name": "エルフ槍術-陣風",
            "input": "通常格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 822,
            "note": ""
        },
        {
            "name": "エルフ槍術-陣風(2段目)",
            "input": "通常格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 841,
            "note": ""
        },
        {
            "name": "エルフ槍術-陣風(3段目)",
            "input": "通常格闘(3段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 859,
            "note": ""
        },
        {
            "name": "エルフ槍術-陣風(前派生)",
            "input": "前格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 764,
            "note": ""
        },
        {
            "name": "エルフ槍術",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 630,
            "note": "横NN"
        },
        {
            "name": "エルフ槍術-激流",
            "input": "横格闘→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 530,
            "note": ""
        },
        {
            "name": "エルフ槍術-激流(2段目)",
            "input": "横格闘(2段目)→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 650,
            "note": ""
        },
        {
            "name": "エルフ槍術-陣風",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 795,
            "note": ""
        },
        {
            "name": "エルフ槍術-陣風(2段目)",
            "input": "横格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 822,
            "note": ""
        },
        {
            "name": "エルフ槍術",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 348,
            "note": ""
        },
        {
            "name": "エルフ槍術-激流",
            "input": "前格闘→射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 466,
            "note": ""
        },
        {
            "name": "幻影同行",
            "input": "格闘サブ格派生(N・前・横格闘中サブ格)",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "特殊移動。弾数消費なし"
        },
        {
            "name": "墜星槍",
            "input": "後格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 240,
            "note": "弾数性ピョン格+トラップ設置。遮断網150"
        },
        {
            "name": "グンニグル",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 792,
            "note": "単発の投擲。SB/FMD:792/720"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c012",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "術式・炎Ⅱ",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 210,
            "note": "弾速の速いメイン"
        },
        {
            "name": "術式・炎Ⅲ",
            "input": "各射撃メイン射撃派生",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 405,
            "note": "足を止めない照射＋キー照射"
        },
        {
            "name": "術式・氷Ⅱ(共鳴)",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 435,
            "note": "弾速の速い氷弾240＋キー突進195"
        },
        {
            "name": "術式・氷Ⅴ(共鳴)",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 645,
            "note": "10発の細い氷柱(61x10=610？備考420？)＋キー狙撃225"
        },
        {
            "name": "術式・物理Ⅳ",
            "input": "後メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 249,
            "note": "格闘属性のキー取り付き"
        },
        {
            "name": "術式・雷Ⅴ(共鳴)",
            "input": "N/横サブ格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 375,
            "note": "キーの雷球弾3射(156x3)。左右入力で本体が大きく移動。弾数2"
        },
        {
            "name": "術式・星Ⅰ(共鳴)",
            "input": "後サブ格闘",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 567,
            "note": "キーのゲロビ(61x20)"
        },
        {
            "name": "術式・物理Ⅲ",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 628,
            "note": "4入力5段格闘。NNNN"
        },
        {
            "name": "術式・星Ⅲ(共鳴)",
            "input": "メイン格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 635,
            "note": "最終段でキーの照射、放置可能"
        },
        {
            "name": "術式・星Ⅲ(共鳴)(2段目)",
            "input": "メイン格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 683,
            "note": ""
        },
        {
            "name": "術式・星Ⅲ(共鳴)(3段目)",
            "input": "メイン格闘(3段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 745,
            "note": ""
        },
        {
            "name": "術式・物理Ⅴ",
            "input": "メイン格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 703,
            "note": "引き摺り後突き落とし、カット耐性が高い"
        },
        {
            "name": "術式・物理Ⅴ(2段目)",
            "input": "メイン格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 738,
            "note": ""
        },
        {
            "name": "術式・物理Ⅴ(3段目)",
            "input": "メイン格闘(3段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 775,
            "note": ""
        },
        {
            "name": "術式・物理Ⅱ",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 485,
            "note": "1入力2段格闘、強判定"
        },
        {
            "name": "術式・物理Ⅰ",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 510,
            "note": "2入力3段格闘。横N"
        },
        {
            "name": "術式・星Ⅲ(共鳴)",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 623,
            "note": ""
        },
        {
            "name": "術式・星Ⅲ(共鳴)(2段目)",
            "input": "横格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 666,
            "note": "出し切り前に派生"
        },
        {
            "name": "術式・物理Ⅴ",
            "input": "横格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 695,
            "note": ""
        },
        {
            "name": "術式・物理Ⅴ(2段目)",
            "input": "横格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 725,
            "note": "出し切り前に派生"
        },
        {
            "name": "元素爆発",
            "input": "Nバーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 999,
            "note": "出し切りまでスーパーアーマー。F/S/B/MD:999//957/869"
        },
        {
            "name": "元素の嵐",
            "input": "後バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 788,
            "note": "回転して周囲攻撃。射撃バリア＋スーパーアーマー。F/S/B/MD:726//788/726"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c013",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "神霊巫女",
            "input": "パッシブ",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "一部攻撃命中時残心を1つ獲得。残心の蓄積数に応じて攻撃力アップ"
        },
        {
            "name": "陰陽流・止水",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "足を止めて構える。前方の射撃は修羅丸が防ぐ。ステップ入力で特殊ステップ発動"
        },
        {
            "name": "陰陽流・疾雨",
            "input": "メイン格闘派生",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 694,
            "note": "射撃バリア突撃。長押しでヒット数アップ。残心獲得"
        },
        {
            "name": "陰陽流・繚乱",
            "input": "サブ格闘派生",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 623,
            "note": "格闘カウンター突撃。残心獲得"
        },
        {
            "name": "御霊・斬",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 165,
            "note": "修羅丸が突撃&配置"
        },
        {
            "name": "御霊・瞬",
            "input": "横サブ射撃",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 135,
            "note": "左右に同時突撃&配置"
        },
        {
            "name": "御霊・震",
            "input": "後メイン格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 3,
            "note": "SA状態で全方位プレッシャー"
        },
        {
            "name": "陰陽流・狂嵐",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 788,
            "note": "残心獲得。NNN"
        },
        {
            "name": "陰陽流・飛燕",
            "input": "メイン格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 478,
            "note": "修羅丸のみが連続攻撃"
        },
        {
            "name": "陰陽流・飛燕(2段目)",
            "input": "メイン格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 573,
            "note": ""
        },
        {
            "name": "陰陽流・飛燕(3段目)",
            "input": "メイン格闘(3段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 758,
            "note": ""
        },
        {
            "name": "陰陽流・怒涛",
            "input": "メイン格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 730,
            "note": "長押しでヒット数増加。残心獲得"
        },
        {
            "name": "陰陽流・怒涛(2段目)",
            "input": "メイン格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 775,
            "note": ""
        },
        {
            "name": "陰陽流・怒涛(3段目)",
            "input": "メイン格闘(3段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 880,
            "note": ""
        },
        {
            "name": "陰陽流・開雲",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 768,
            "note": "残心獲得。横NNN"
        },
        {
            "name": "陰陽流・飛燕",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 440,
            "note": ""
        },
        {
            "name": "陰陽流・飛燕(2段目)",
            "input": "横格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 541,
            "note": ""
        },
        {
            "name": "陰陽流・飛燕(3段目)",
            "input": "横格闘(3段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 719,
            "note": ""
        },
        {
            "name": "陰陽流・飛燕(4段目)",
            "input": "横格闘(4段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 736,
            "note": ""
        },
        {
            "name": "陰陽流・怒涛",
            "input": "横格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 692,
            "note": ""
        },
        {
            "name": "陰陽流・怒涛(2段目)",
            "input": "横格闘(2段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 750,
            "note": ""
        },
        {
            "name": "陰陽流・怒涛(3段目)",
            "input": "横格闘(3段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 841,
            "note": ""
        },
        {
            "name": "陰陽流・怒涛(4段目)",
            "input": "横格闘(4段目)→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 815,
            "note": ""
        },
        {
            "name": "陰陽流・断水",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 210,
            "note": "射撃バリア斬り抜け。前N"
        },
        {
            "name": "陰陽流・千閃",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 791,
            "note": "長押しでヒット数増加。残心獲得"
        },
        {
            "name": "陰陽流・鎌鼬",
            "input": "横サブ格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 722,
            "note": "長押しでヒット数増加。残心獲得"
        },
        {
            "name": "陰陽流・星落",
            "input": "後サブ格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 965,
            "note": "残心を消費して発動。高度対応。残心により性能強化。弾数3"
        },
        {
            "name": "人霊一体",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 964,
            "note": "乱舞技。F/B/SMD:/964/"
        },
        {
            "name": "御霊・断罪",
            "input": "前バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 911,
            "note": "5凸で開放。単発。F/B/SMD:911/759/690"
        },
        {
            "name": "陰陽流・刹那",
            "input": "後バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 1440,
            "note": "補正無視の格闘カウンター。成立時残心3獲得。F/B/SMD:1440/1320/1200"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c014",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "神装・ロンギヌス",
            "input": "パッシブスキル",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "機動力が低く、ヒットボックスが大きい"
        },
        {
            "name": "ガンブレード",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 210,
            "note": "2連射可能。弾が少し太め。弾数8(10)"
        },
        {
            "name": "無反動砲",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 468,
            "note": "高誘導の実弾3連射"
        },
        {
            "name": "無反動砲・移動射撃",
            "input": "横サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 468,
            "note": "レバーNと違いメインキャンセル無し"
        },
        {
            "name": "無反動砲・反応弾",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 673,
            "note": "使用後サブ射撃2へ移行"
        },
        {
            "name": "無反動砲・リモート射撃",
            "input": "後サブ射撃2",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 228,
            "note": "メインキャンセルで落下可能"
        },
        {
            "name": "ガンブレード・斉射",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 700,
            "note": "極太の照射ビーム"
        },
        {
            "name": "ガンブレード・掃射",
            "input": "横サブ格闘",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 507,
            "note": "回転照射"
        },
        {
            "name": "制圧射撃",
            "input": "後サブ格闘",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 0,
            "note": "Vの字に照射+中央にミサイルをばら撒く"
        },
        {
            "name": "ミサイル発射器",
            "input": "後格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 0,
            "note": "2発hitでスタン"
        },
        {
            "name": "ガンブレード(派生)",
            "input": "後格闘→N/横メイン射撃派生",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 0,
            "note": "Nの場合は宙返りから5発、追加入力で更に5発。レバー横で横移動しつつビームを5発"
        },
        {
            "name": "ガンブレード・格闘",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 552,
            "note": "出し切るよりも派生をした方が威力もカット耐性も良い。NNN"
        },
        {
            "name": "無反動砲・追撃",
            "input": "メイン格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 603,
            "note": ""
        },
        {
            "name": "ガンブレード・追撃",
            "input": "メイン格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 802,
            "note": "長押しで威力変動"
        },
        {
            "name": "ガンブレード・格闘",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 548,
            "note": "N格闘同様出し切るよりも派生をした方が良い。横NNN"
        },
        {
            "name": "無反動砲・追撃",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 585,
            "note": ""
        },
        {
            "name": "ガンブレード・追撃",
            "input": "横格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 794,
            "note": "長押しで威力変動"
        },
        {
            "name": "膝部発射器",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 414,
            "note": ""
        },
        {
            "name": "私達の力だ！",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 0,
            "note": "F/S/B/MD:/"
        },
        {
            "name": "無反動砲・収束反応弾",
            "input": "後バーストアタック",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 0,
            "note": "F/S/B/MD:/"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c015",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "ロックンロール不滅",
            "input": "パッシブスキル",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "特定動作の追加入力タイミングで性能強化"
        },
        {
            "name": "リズムビート",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 441,
            "note": "足を止めて射撃。連射時ビート成功で束ね撃ち"
        },
        {
            "name": "ハードロックサウンド",
            "input": "後メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 378,
            "note": "近距離ダウン確定武装"
        },
        {
            "name": "ストラミング",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "ファンネル",
            "dmg": 405,
            "note": "レバー入れで挙動が変わるファンネル武装"
        },
        {
            "name": "フルチョーキング",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 264,
            "note": "単発射撃を防ぐ音波ボールを射出"
        },
        {
            "name": "リズムストーム",
            "input": "サブ射撃派生",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 595,
            "note": "凸3で解禁。急降下しつつ、自身の周りに範囲攻撃エリアを展開。連打で攻撃数増加"
        },
        {
            "name": "ステージ爆発",
            "input": "後格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 210,
            "note": "周囲に火柱。ビートでジャンプ派生"
        },
        {
            "name": "激情の速弾き",
            "input": "前/横サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "特殊移動。ビート対応"
        },
        {
            "name": "Let'sRock!",
            "input": "後サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 150,
            "note": "味方も強化する時限強化"
        },
        {
            "name": "熱狂ビート",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 603,
            "note": "ビート対応。NN+N。567/585/603"
        },
        {
            "name": "スピン・キー・チェンジ",
            "input": "メイン格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 676,
            "note": "敵を足場にして周囲に弾をばら撒く"
        },
        {
            "name": "スピン・キー・チェンジ(2段目)",
            "input": "メイン格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 722,
            "note": ""
        },
        {
            "name": "熱狂ビート",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 505,
            "note": "ビート対応。横+N。463/484/505"
        },
        {
            "name": "スピン・キー・チェンジ",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 678,
            "note": ""
        },
        {
            "name": "リバーブインパクト",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 646,
            "note": "連打で威力増加。前N"
        },
        {
            "name": "リバーブインパクト・ヴァリエーション",
            "input": "BD格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 734,
            "note": "ビート対応。ダッシュ中NN+N。688/711/734"
        },
        {
            "name": "スピン・キー・チェンジ",
            "input": "BD格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 637,
            "note": ""
        },
        {
            "name": "スピン・キー・チェンジ(2段目)",
            "input": "BD格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 729,
            "note": ""
        },
        {
            "name": "パッション・トリオ",
            "input": "Nサブ格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 813,
            "note": "スーパーアーマー。ビート対応。サ格x2+サ格。255/306/813"
        },
        {
            "name": "Climax~!",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 1019,
            "note": "ビート対応。F/S/B/MD:///932/ ///963/ //1019/"
        },
        {
            "name": "Encore~!",
            "input": "後バーストアタック",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 753,
            "note": "5凸解禁。曲げ撃ち可能な5way照射ビーム。F/S/B/MD:/753/753/"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c016",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "海の光",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 210,
            "note": "標準的なビーム"
        },
        {
            "name": "幻海の儚い泡",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 211,
            "note": "拘束時間の長い射撃"
        },
        {
            "name": "トゲタツノオトシゴ",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 384,
            "note": "3連射"
        },
        {
            "name": "巡遊",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "巡遊状態に移行"
        },
        {
            "name": "水と泡",
            "input": "巡遊状態 メイン射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 345,
            "note": "強制ダウン"
        },
        {
            "name": "トゲタツノオトシゴ(連動)",
            "input": "巡遊状態 メイン射撃連動",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 345,
            "note": "本体に続き強制ダウンビーム"
        },
        {
            "name": "トゲタツノオトシゴ・協力",
            "input": "巡遊状態 サブ射撃",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 667,
            "note": "滑りつつ照射ビーム"
        },
        {
            "name": "トゲタツノオトシゴ・協力(連動)",
            "input": "巡遊状態 サブ射撃連動",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 667,
            "note": "本体に続き照射ビーム"
        },
        {
            "name": "トゲタツノオトシゴ・援護",
            "input": "巡遊状態 横サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 500,
            "note": "レバー方向に動きつつ10連射"
        },
        {
            "name": "トゲタツノオトシゴ・援護(連動)",
            "input": "巡遊状態 横サブ射撃連動",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 500,
            "note": "本体と逆方向に動き10連射"
        },
        {
            "name": "深海の蛇影",
            "input": "巡遊状態 サブ格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 280,
            "note": "蛇行突撃しつつ5連射"
        },
        {
            "name": "渦流の尾撃",
            "input": "巡遊状態 横/後サブ格闘",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 337,
            "note": "6連射しつつ変形解除"
        },
        {
            "name": "深海の恐怖",
            "input": "巡遊状態 後格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 217,
            "note": "スパアマ付きプレッシャー"
        },
        {
            "name": "激流の戟",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 577,
            "note": "標準的な3段。出し切り受身不可。NNN"
        },
        {
            "name": "凍骨のしらべ",
            "input": "メイン格闘→メイン射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 438,
            "note": "受身不可で飛ばす"
        },
        {
            "name": "渦流の舞",
            "input": "メイン格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 663,
            "note": "長押し対応。出し切り強制ダウン"
        },
        {
            "name": "儚い泡の消滅",
            "input": "メイン格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 592,
            "note": "変形しつつ打ち上げ"
        },
        {
            "name": "激流の戟",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 740,
            "note": "完走まで長い。出し切り強制ダウン。横N"
        },
        {
            "name": "凍骨のしらべ",
            "input": "横格闘→メイン射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 493,
            "note": ""
        },
        {
            "name": "渦流の舞",
            "input": "横格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 691,
            "note": ""
        },
        {
            "name": "儚い泡の消失",
            "input": "横格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 645,
            "note": ""
        },
        {
            "name": "タイダルインパクト",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 558,
            "note": "出っ放し格闘"
        },
        {
            "name": "幻海のエレジー",
            "input": "後格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 608,
            "note": "格闘カウンター"
        },
        {
            "name": "激流の戟(巡遊)",
            "input": "巡遊状態 メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 767,
            "note": "縦に動くが完走まで長い。NNN"
        },
        {
            "name": "凍骨のしらべ(巡遊)",
            "input": "巡遊状態 メイン格闘→メイン射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 423,
            "note": ""
        },
        {
            "name": "渦流の舞(巡遊)",
            "input": "巡遊状態 メイン格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 673,
            "note": ""
        },
        {
            "name": "渦流の尾撃(巡遊)",
            "input": "巡遊状態 メイン格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 616,
            "note": "キャンセル不可"
        },
        {
            "name": "怒涛の突き",
            "input": "巡遊状態 前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 315,
            "note": "フワ格"
        },
        {
            "name": "深海の静謐",
            "input": "ガード(盾)",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "全方位ガード"
        },
        {
            "name": "盾→メイン射撃派生",
            "input": "ガード中 メイン射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 62,
            "note": "3凸後解禁。周囲に射撃。レバー方向に移動。62〜"
        },
        {
            "name": "盾→サブ射撃派生",
            "input": "ガード中 サブ射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 211,
            "note": "3凸後解禁。サブ射撃と弾数共有。メインキャンセル可。弾数2"
        },
        {
            "name": "盾→サブ格闘派生",
            "input": "ガード中 サブ格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 656,
            "note": "3凸後解禁。出っ放し格闘。良補正"
        },
        {
            "name": "淵海の疾駆",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 827,
            "note": "前方に波を打ち出す。発動後巡遊状態に移行。F/S/B/MDC://827/"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c017",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "妖刀システム",
            "input": "パッシブスキル",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "HP1000未満orバーストで妖刀発動"
        },
        {
            "name": "鬼銃",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 210,
            "note": "実弾BR"
        },
        {
            "name": "鬼尾",
            "input": "チャージメイン射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 195,
            "note": "移動撃ちできるオールレンジ攻撃"
        },
        {
            "name": "鬼息",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 345,
            "note": "強制ダウン。弾数1(3凸時2)"
        },
        {
            "name": "鬼息(妖刀状態)",
            "input": "妖刀状態 横サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 315,
            "note": "非強制ダウン"
        },
        {
            "name": "繚乱",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 224,
            "note": "位置サーチ攻撃。妖刀時は威力低下・補正緩和。カッコ内129"
        },
        {
            "name": "疾風迅雷",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "特殊移動"
        },
        {
            "name": "鬼牙",
            "input": "メイン射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 278,
            "note": "横入力は大きく移動"
        },
        {
            "name": "鬼牙(妖刀状態)",
            "input": "妖刀状態 メイン射撃派生",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 384,
            "note": "Nは3way、横は3連射に変化。N:278/横:384"
        },
        {
            "name": "牙突",
            "input": "前格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 461,
            "note": "スーパーアーマー"
        },
        {
            "name": "牙突(妖刀状態)",
            "input": "妖刀状態 前格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 519,
            "note": "SA+判定出しっぱ突進"
        },
        {
            "name": "妖刀",
            "input": "後+ガード",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "時限強化。消費100"
        },
        {
            "name": "素振",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 561,
            "note": "手早く終わる。NN"
        },
        {
            "name": "驟雨",
            "input": "メイン格闘→後格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 693,
            "note": "4凸解禁。長押しでヒット数増加。N(1)→後"
        },
        {
            "name": "素振(妖刀状態)",
            "input": "妖刀状態 メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 732,
            "note": "強制ダウン。NNN"
        },
        {
            "name": "素振",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 456,
            "note": "打ち上げ。横N"
        },
        {
            "name": "驟雨",
            "input": "横格闘→後格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 678,
            "note": "横(1)→後"
        },
        {
            "name": "素振(妖刀状態)",
            "input": "妖刀状態 横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 702,
            "note": "強制ダウン。横NN"
        },
        {
            "name": "唐竹割",
            "input": "後格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 240,
            "note": "ピョン格闘"
        },
        {
            "name": "唐竹割(妖刀状態)",
            "input": "妖刀状態 後格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 576,
            "note": "範囲拡大"
        },
        {
            "name": "袈裟斬",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 486,
            "note": "ダウン拾い。前NN"
        },
        {
            "name": "袈裟斬(妖刀状態)",
            "input": "妖刀状態 前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 614,
            "note": "ダウン拾い。前NN"
        },
        {
            "name": "袈裟斬",
            "input": "BD格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 471,
            "note": "打ち上げ斬り抜け。BD中前N"
        },
        {
            "name": "袈裟斬(妖刀状態)",
            "input": "妖刀状態 BD格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 677,
            "note": "3連斬り抜け。BD中前N"
        },
        {
            "name": "煉獄",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 938,
            "note": "乱舞技。F/S/B/MD:/938/851"
        },
        {
            "name": "断罪",
            "input": "後バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 842,
            "note": "5凸解禁。使用すると通常形態へ移行。F/S/B/MD:/842/765"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c018",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "複合兵装・射撃",
            "input": "メイン射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 210,
            "note": "弾数豊富なBR"
        },
        {
            "name": "複合兵装・強力射撃",
            "input": "チャージメイン射撃",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 667,
            "note": "細い照射ビーム"
        },
        {
            "name": "ビームサーベル・投擲",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 154,
            "note": "2連投可能なブーメラン"
        },
        {
            "name": "スピアヘッド01",
            "input": "弾切れ時サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 345,
            "note": "強制ダウン"
        },
        {
            "name": "エネルギー発射装置・側転",
            "input": "横サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 414,
            "note": "側転しながら爆風つきミサイル"
        },
        {
            "name": "エネルギー発射装置・散射",
            "input": "後サブ射撃",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 389,
            "note": "足を止めて爆風付きミサイル拡散撃ち"
        },
        {
            "name": "エネルギー発射装置・収束",
            "input": "後サブ格闘",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 324,
            "note": "1凸解禁。足を止めて単発ビーム"
        },
        {
            "name": "複合兵装・斬り",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 571,
            "note": "打ち上げから2連斬り抜け。NNN"
        },
        {
            "name": "斬り抜け",
            "input": "メイン格闘→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 447,
            "note": "受け身不可付与"
        },
        {
            "name": "斬り抜け(2段目)",
            "input": "メイン格闘(2段目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 542,
            "note": ""
        },
        {
            "name": "斬り抜け(3段目1hit目)",
            "input": "メイン格闘(3段目1hit目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 639,
            "note": ""
        },
        {
            "name": "高速斬り",
            "input": "メイン格闘→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 656,
            "note": "3凸解禁。連続斬り抜け"
        },
        {
            "name": "高速斬り(2段目)",
            "input": "メイン格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 719,
            "note": ""
        },
        {
            "name": "高速斬り(3段目1hit目)",
            "input": "メイン格闘(3段目1hit目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 788,
            "note": ""
        },
        {
            "name": "ビームサーベル・斬り",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 495,
            "note": "2連斬りから斬り抜け。横N"
        },
        {
            "name": "斬り抜け",
            "input": "横格闘(1段目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 435,
            "note": ""
        },
        {
            "name": "斬り抜け(2段目)",
            "input": "横格闘(2段目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 569,
            "note": ""
        },
        {
            "name": "高速斬り",
            "input": "横格闘(1段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 641,
            "note": ""
        },
        {
            "name": "高速斬り(2段目)",
            "input": "横格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 737,
            "note": ""
        },
        {
            "name": "ビームサーベル・斬り",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 479,
            "note": "射撃バリア突進"
        },
        {
            "name": "斬り抜け",
            "input": "前格闘(2段目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 551,
            "note": ""
        },
        {
            "name": "高速斬り",
            "input": "前格闘(2段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 711,
            "note": ""
        },
        {
            "name": "ビームサーベル・斬り",
            "input": "BD格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 578,
            "note": "フワ格闘。BD中前N"
        },
        {
            "name": "斬り抜け",
            "input": "BD格闘(1段目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 447,
            "note": ""
        },
        {
            "name": "斬り抜け(2段目1hit目)",
            "input": "BD格闘(2段目1hit目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 620,
            "note": ""
        },
        {
            "name": "高速斬り",
            "input": "BD格闘(1段目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 656,
            "note": ""
        },
        {
            "name": "高速斬り(2段目1hit目)",
            "input": "BD格闘(2段目1hit目)→サブ射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 788,
            "note": ""
        },
        {
            "name": "腕部グラップル",
            "input": "後格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 30,
            "note": "当たった相手を引き寄せるアンカー射出"
        },
        {
            "name": "斬り抜け",
            "input": "後格闘→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 330,
            "note": ""
        },
        {
            "name": "脚部ブレード",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 759,
            "note": "長い連続キック。サブ格x3"
        },
        {
            "name": "複合兵装・重撃",
            "input": "横サブ格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 240,
            "note": "大きく回り込んで斬り上げる"
        },
        {
            "name": "ワルキューレの舞",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 966,
            "note": "最終段射撃の格闘多段攻撃。F/S/B/MD://966/877"
        },
        {
            "name": "ワルキューレの翼",
            "input": "後バーストアタック",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "ブーストを回復する時限強化"
        }
    ],
    combos: [],
    memo: ""
  },
  {
    id: "3.0_c019",
    status: {"hp":0,"boostCount":0,"boostDist":0,"lockDist":0},
    moves: [
        {
            "name": "Trans-Void",
            "input": "パッシブスキル",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "一部動作中無敵。バースト中機動力増加+攻撃していない時に被弾すると無敵"
        },
        {
            "name": "合成兵装・射撃(分離)",
            "input": "メイン射撃1",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 302,
            "note": "移動撃ちできるワイドビーム+ビット射撃"
        },
        {
            "name": "合成兵装・射撃(分離・振り向き)",
            "input": "振り向き時メイン射撃1",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 405,
            "note": "2発同時+ビット射撃"
        },
        {
            "name": "合成兵装・射撃(合体)",
            "input": "メイン射撃2",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 441,
            "note": "移動撃ちできる照射"
        },
        {
            "name": "合成兵装・射撃(合体・振り向き)",
            "input": "振り向き時メイン射撃2",
            "startup": 0,
            "hitbox": "照射",
            "dmg": 477,
            "note": "足を止めて2連装照射"
        },
        {
            "name": "合成兵装・合体/分離",
            "input": "サブ射撃",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "メイン射撃を切り替える"
        },
        {
            "name": "ビームランチャー",
            "input": "横サブ射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 270,
            "note": "横移動しながら2連射"
        },
        {
            "name": "ビームランチャー(前/後)",
            "input": "前/後サブ射撃",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 303,
            "note": "宙返りしながら同時射撃"
        },
        {
            "name": "合成兵装・切断",
            "input": "後格闘",
            "startup": 0,
            "hitbox": "ビーム",
            "dmg": 537,
            "note": "足を止めてワイドビーム+ビット突撃。4凸で溜め撃ち可能"
        },
        {
            "name": "粒子バリア",
            "input": "弾切れ後格闘",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "全方位バリア+カウンター"
        },
        {
            "name": "格闘プログラム・メインI",
            "input": "メイン格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 614,
            "note": "出し切りバウンド。NNN"
        },
        {
            "name": "格闘プログラム・エクステンドI",
            "input": "メイン格闘→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 494,
            "note": "横薙ぎからスタン斬り抜け"
        },
        {
            "name": "格闘プログラム・エクステンドI(2段目)",
            "input": "メイン格闘(2段目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 602,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドI(3段目1hit目)",
            "input": "メイン格闘(3段目1hit目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 646,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドI(3段目2hit目)",
            "input": "メイン格闘(3段目2hit目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 684,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドII",
            "input": "メイン格闘→前格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 645,
            "note": "拘束から強制ダウン"
        },
        {
            "name": "格闘プログラム・エクステンドII(2段目)",
            "input": "メイン格闘(2段目)→前格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 719,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドII(3段目1hit目)",
            "input": "メイン格闘(3段目1hit目)→前格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 751,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドII(3段目2hit目)",
            "input": "メイン格闘(3段目2hit目)→前格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 775,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドIII",
            "input": "メイン格闘→後格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 831,
            "note": "3凸で解禁。キャンセル不可の高威力派生"
        },
        {
            "name": "格闘プログラム・エクステンドIII(2段目)",
            "input": "メイン格闘(2段目)→後格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 869,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドIII(3段目1hit目)",
            "input": "メイン格闘(3段目1hit目)→後格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 886,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドIII(3段目2hit目)",
            "input": "メイン格闘(3段目2hit目)→後格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 896,
            "note": ""
        },
        {
            "name": "格闘プログラム・メインII",
            "input": "横格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 551,
            "note": "2連撃x2段。横N"
        },
        {
            "name": "格闘プログラム・エクステンドI",
            "input": "横格闘(1段目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 494,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドI(2段目)",
            "input": "横格闘(2段目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 573,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドI(2段目1hit目)",
            "input": "横格闘(2段目1hit目)→メイン射撃派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 646,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドII",
            "input": "横格闘(1段目)→前格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 645,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドII(2段目)",
            "input": "横格闘(2段目)→前格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 702,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドII(2段目1hit目)",
            "input": "横格闘(2段目1hit目)→前格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 757,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドIII",
            "input": "横格闘(1段目)→後格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 831,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドIII(2段目)",
            "input": "横格闘(2段目)→後格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 864,
            "note": ""
        },
        {
            "name": "格闘プログラム・エクステンドIII(2段目1hit目)",
            "input": "横格闘(2段目1hit目)→後格闘派生",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 900,
            "note": ""
        },
        {
            "name": "格闘プログラム・メインIII",
            "input": "前格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 677,
            "note": "バースト中Trans-Void付与。サブ格派生から出すと性能変化"
        },
        {
            "name": "格闘プログラム・ユニークI",
            "input": "サブ格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 203,
            "note": "判定縮小斬り抜け。バースト中1回だけTrans-Void付与。弾数1"
        },
        {
            "name": "格闘プログラム・ユニークII",
            "input": "前サブ格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 671,
            "note": "全方位バリア格闘"
        },
        {
            "name": "格闘プログラム・ユニークIII",
            "input": "横サブ格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 310,
            "note": "回り込んで突く"
        },
        {
            "name": "格闘プログラム・ユニークIV",
            "input": "後サブ格闘",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 255,
            "note": "ピョン格"
        },
        {
            "name": "Trans-Void Activate",
            "input": "各格闘→サブ格闘派生",
            "startup": 0,
            "hitbox": "特殊",
            "dmg": 0,
            "note": "1凸で解禁。無敵状態で移動"
        },
        {
            "name": "格闘プログラム・ファイナルX",
            "input": "バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 1173,
            "note": "射撃が混ざる乱舞系。F/S/B/MDC:1173/994/1089/987"
        },
        {
            "name": "合成兵装・オーバーリミット斬撃",
            "input": "横バーストアタック",
            "startup": 0,
            "hitbox": "格闘",
            "dmg": 793,
            "note": "レバー方向に薙ぎ払い。F/S/B/MDC:793/660/726/660"
        },
        {
            "name": "合成兵装・オーバーリミット射撃",
            "input": "後バーストアタック",
            "startup": 0,
            "hitbox": "射撃",
            "dmg": 792,
            "note": "5凸で解禁。赤ロック無限狙撃。F/S/B/MDC:720/792/792/720"
        }
    ],
    combos: [],
    memo: ""
  }
];
