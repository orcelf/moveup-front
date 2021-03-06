'use strict';

/**
 * @ngdoc function
 * @name moveupApp.controller:TermsCtrl
 * @description
 * # AboutCtrl
 * Controller of the moveupApp
 */
angular.module('moveupApp')
  .controller('TermsCtrl',  ['$scope', '$http','ApiService', '$location', '$routeParams' ,function ($scope, $http, apiService,$location,$routeParams) {
    $scope.hideFooter = false;

    $scope.content = '</br>JAPAN MOVE UP WEST WEB利用規約は、株式会社HEADLINE WESTが管理・運営するインターネット上（PC向け、モバイル向け双方を含むものとします。）のサイト『JAPAN MOVE UP WEST WEB』において提供するNOW GOサービス及びNOW FORサービスを含む全てのサービスの利用に関する条件を定めるものです。'+
    '</br>本サービスの利用に際しては、本規約の全文をお読みいただいたうえで、本規約に同意していただく必要があります。'+
    '</br>なお、規約の内容は、ユーザーへの事前の通知なしに必要に応じて変更することがありますので、本サービスをご利用の際には本サービス上に掲載されている最新の本規約をご確認下さい。'+
    '</br>'+
    '</br><h3 align="center">－第１章　総　則－</h3>'+
    '</br><h4>第１条（目的）</h4>'+
    'JAPAN MOVE UP WEST WEB は、インターネット、モバイル等多様なメディアを活用し、また、イベントを通じて、岡山の街と人、街と街、人と人をつなぐ場を提供することを目的としています。'+
    '</br>'+
    '</br><h4>第２条（定義）</h4>'+
    '１．本規約で利用する用語の定義は、以下のとおりとします。'+
    '</br>(１)　『当社』とは、株式会社HEADLINE WESTをいいます。'+
    '</br>(２)　『本サイト』とは、当社が管理・運営するインターネット上のサイトである『JAPAN MOVE UP WEST WEB』をいいます。'+
    '</br>(３)　『本規約』とは、JAPAN MOVE UP WEST WEB利用規約をいいます。'+
    '</br>(４)　『ユーザー』とは、本サイトの全ての利用者をいいます。'+
    '</br>(５)　『会員』とは、ユーザーのうち当社所定の手続きにしたがい、JAPAN MOVE UP WEST WEB 会員の登録手続を完了したユーザーをいいます。'+
    '</br>(６)　『協力店』とは、当社の指定する方法に従って協力店の登録を申し込み、当社が当該申込みを承諾した店舗であって、本サイトに店舗情報等を掲載する店舗等をいいます。'+
    '</br>(７)　『NOW GOサービス』とは、当社が本サイトにおいて提供するサービスのうち本規約第９条に定めるサービスをいいます。'+
    '</br>(８)　『NOW FORサービス』とは、当社が本サイトにおいて提供するサービスのうち本規約第１０条に定めるサービスをいいます。'+
    '</br>(９)　『有用情報』とは、NOW FORサービスにおいて協力店からユーザーに対して提供されるキャンペーン情報、クーポン情報、タイムセール情報、割引情報等一切の情報をいいます。'+
    '</br>(10)　『本サービス』とは、NOW GOサービス及びNOW FORサービスを含めた本サイトで提供される全てのサービスをいいます。'+
    '</br>(11)　『MOVE UP TV』とは、本サイトのうち、各種ジャンルの動画を掲載することを目的とするサイトのことをいいます。'+
    '</br>(12)　『カテゴリー』とは、『MOVE UP TV』において各種のジャンル（ジャンルには、SPECIAL、KIDS、GIRL、LIFE、ORIGINAL、OKAYAMAを含みますがこれに限りません。）に分けられた動画を視聴することができる個別のサイトのことをいいます。'+
    '</br>(13)　『MOVE UP STORE』とは、本サイトのうち、物品販売等を行うことを目的とするサイトのことをいいます。'+
    '</br>(14)　『ユーザー情報』とは、ユーザーの本サイトに対するアクセスログ、ユーザー識別ID、端末名、OS及び本サイトアプリの識別IDのことをいいます。'+
    '</br>(15)　『SP取得情報』とは、ユーザー情報のうち、スマートフォンから取得する情報、すなわちアクセスログを除く情報の総称をいいます。'+
    '</br>'+
    '</br><h4>第３条（本規約の適用及び変更）</h4>'+
    '１．本規約は、本サービスの提供条件及び本サービスの利用に関する当社とユーザーとの間の本サービスの利用に関わる一切の関係に適用されます。'+
    '</br>２．当社は、ユーザーに事前に通知することなく、本規約の全部又は一部を改定することができるものとし、ユーザーはこれをあらかじめ承諾するものとします。'+
    '</br>３．本規約の改定は、当社が改訂後の本規約を本サイトに掲示したときにその効力を生じるものとします。'+
    '</br>４．当社が本サイト上に掲載する諸注意等が存在する場合、諸注意等は本規約の一部を構成するものとします。'+
    '</br>'+
    '</br><h3 align="center">－第２章　本サービスの利用－</h3>'+
    '</br><h4>第４条（会員登録手続）</h4>'+
    '１．会員登録を希望するユーザーは、本規約を遵守することに同意し、かつ、当社の定める一定の情報を当社の定める方法で当社に提供することにより、当社に対し、JAPAN MOVE UP WEST WEB 会員の登録を申請することができるものとします。'+
    '</br>２．当社は、当社の基準に従って、前項に基づいて登録申請を行った会員登録を希望するユーザーの登録の可否を判断し、当社が登録を認める場合には、その旨を通知します。登録申請を希望するユーザーの登録は、当社が本項の通知を行ったことをもって完了したものとします。'+
    '</br>３．当社は、会員であるユーザーと当社所定の会員登録手続を完了していないユーザーとの間で、本サイトにおいて提供するサービスを異ならせることがあります。会員に対して提供されるサービスと会員登録手続を完了していないユーザーに対して提供されるサービスの内容等は、当社が任意に決定し、随時変更できるものとします。'+
    '</br>４．当社は、会員登録手続の申請者が、以下の各号のいずれかの事由に該当する場合には、登録及び再登録を拒否することがあります。また、その理由について、一切開示する義務を負いません。'+
    '</br>(１)　当社に提供した登録事項の全部又は一部につき虚偽、誤記又は記載漏れがあった場合。'+
    '</br>(２)　反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準じる者を意味します。以下同じ。）である又は資金提供その他の方法で反社会的勢力等の維持、運営、経営に協力し、もしくは関与する等反社会的勢力等との何らかの交流、関与を行っていると当社が判断した場合。'+
    '</br>(３)　会員登録希望者が過去当社との契約に違反した者又はその関係者であると当社が判断した場合。'+
    '</br>(４)　その他、当社が登録を適当でないと判断した場合。'+
    '</br>５．会員は、当社が発行した１つのＩＤ及びパスワードのみを利用することができるものとします。'+
    '</br>'+
    '</br><h4>第５条（登録事項の変更）</h4>'+
    '会員は、登録事項に変更があった場合、当社の定める方法により当該変更事項を遅滞なく当社に通知するものとします。'+
    '</br>'+
    '</br><h4>第６条（ログインアカウント、パスワード及びユーザーＩＤの管理）</h4>'+
    '１．会員は、自己の責任において、本サービスに関するログインアカウント、パスワード及びユーザーＩＤを適切に管理及び保管するものとし、これを第三者に利用させ、又は貸与、譲渡、名義変更、売買等をしてはならないものとします。'+
    '</br>２．ログインアカウント、パスワード又はユーザーＩＤの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任は、会員が負うものとし、当社は一切の責任を負いません。'+
    '</br>'+
    '</br><h4>第７条（セキュリティー）</h4>'+
    '会員登録については、現在最も信頼性の高いインターネット上の暗号通信技術ＳＳＬ（Secure Socket Layer）を使用し、送信される情報は第三者に見られることがないように暗号化されています。'+
    '</br>'+
    '</br><h4>第８条（本サービスの利用について）</h4>'+
    '１．協力店は、自己の責任においてサービス又は商品等の情報を提供しており、当社は、本サービスにおいて信頼できるサービスや情報をユーザーへお届けすべく努力していますが、次の各号について、一切保証しないものとします。本サービスの利用に際しては、ユーザーが、本サービス及び本サービスにおいて提供される情報やサービスの有用性等を判断したうえで、ユーザーご自身の責任でご利用下さい。'+
    '</br>(１)　本サービス上で提供される全ての情報（本サービスとして及び本サービス上に表示される第三者が管理・運営するリンクサイト内に含まれる一切の情報等を含みます。以下同じ）に関する正確性、最新性、有用性、完全性、合法性等'+
    '</br>(２)　ユーザーが本サービス上において提供される情報を利用して協力店又は第三者と交渉、予約もしくは契約の申込又は締結等を行う場合において、当該行為に関する一切'+
    '</br>(３)　本サービス及び本サービスを通じて入手できる商品、役務、情報等がユーザーの希望又は期待を満たす適切なものであること'+
    '</br>(４)　本サービスの提供に不具合、エラー又は障害が生じないこと'+
    '</br>(５)　本サイトに関連して送信される電子メール、ウェブコンテンツ等にコンピュータウィルス等の有害なものが含まれていないこと'+
    '</br>(６)　本サービスの存続又は同一性が維持されること'+
    '</br>２．会員が本規約第１１条の規定に基づいてポイントを獲得したり、本規約第１３条の規定に基づいてポイントを利用したりする場合のポイントの情報は、ユーザーＩＤごとに管理されます。'+
    '</br>３．ログインアカウント、パスワード又はユーザーＩＤの管理不十分、使用上の過誤、第三者の使用等によって会員がポイントを喪失した場合の責任は、ユーザーが負うものとし、当社は一切の責任を負いません。'+
    '</br>４．会員登録を抹消した場合、当然にポイントは失効し、再度会員登録をした場合でも、会員登録を抹消した時点において保有していたポイントは復活しません。'+
    '</br>'+
    '</br><h4>第９条（NOW GOサービスの利用について）</h4>'+
    '１．NOW GOサービスとは、ユーザーに対し、協力店のリアルタイムの空席情報を提供するサービスをいいます。'+
    '</br>２．NOW GOサービスの利用に関し、当社は、協力店から正確な空席情報が提供されるよう努力しますが、空席情報の正確性及び真実性等についてなんら保証しないものとします。NOW GOサービスの利用に際しては、ユーザー自身が、提供される空席情報の内容の有用性等を判断し、ユーザーが協力店に対して、直接問い合わせる等して、ユーザー自身の責任でご利用するものとします。当社は、協力店とユーザーとのやりとりに関して一切関与しないものとします。'+
    '</br>'+
    '</br><h4>第１０条（NOW FOR サービスの利用について）</h4>'+
    '１．NOW FORサービスとは、協力店が提供する有用情報をリアルタイムでユーザーに提供するサービスをいいます。'+
    '</br>２．NOW FORサービスの利用に関し、当社は、協力店から正確な有用情報が提供されるよう努力しますが、有用情報の正確性及び真実性等についてなんら保証しないものとします。NOW FORサービスの利用に際しては、ユーザー自身が、協力店から提供される有用情報の内容を判断し、ユーザーが協力店に対して、直接問い合わせる等して、ユーザー自身の責任でご利用するものとします。当社は、協力店とユーザーとのやりとりに関して一切関与しないものとします。'+
    '</br>'+
    '</br><h4>第１１条（ポイントの付与）</h4>'+
    '１．当社は、会員が本項各号のいずれかに定める行為をし、当社がその成果を承認した場合には、会員に対して、一定のポイントを付与します。'+
    '</br>(１)　『MOVE UP TV』のカテゴリーにアクセスし、その際に放送される広告動画の視聴を完了したとき。'+
    '</br>(２)　『MOVE UP TV』において、当社が指定した動画内の広告動画の視聴を完了したとき。'+
    '</br>(３)　本サイトに掲載されているフリーペーパーの情報にアクセスし、その際に放送される広告動画の視聴を完了したとき。'+
    '</br>(４)　MOVE UP STOREにおいて販売されている商品を購入したとき。'+
    '</br>２．会員が前項各号のいずれかに定める行為をした場合の獲得ポイントは、以下のとおりとします。'+
    '</br>(１)　前項第１号の場合は、各カテゴリーの広告動画の視聴１回につき１ポイントとします。ただし、ポイントが付与されるのは、各カテゴリーの広告動画につき１日１回を限度とします。'+
    '</br>(２)　前項第２号の場合は、広告動画の視聴１回につき１ポイントとします。ただし、ポイントが付与されるのは、各動画内の広告動画につき１日１回を限度とします。'+
    '</br>(３)　前項第３号の場合は、広告動画の視聴１回につき１ポイントとします。ただし、ポイントが付与されるのは、各フリーペーパーの広告動画につき１日１回を限度とします。'+
    '</br>(４)　前項第４号の場合は、商品の購入価格（税抜）を１００で除した数（０以下の端数は切捨）のポイントを付与します。'+
    '</br>３．当社は、本条の各項に定めているルールに従って獲得されたポイントが、ポイント付与プログラムの不具合等により、会員のポイントの履歴に正しく表示されなかった場合は、当社の権限により調整し、正確なポイント表示に変更することができるものとします。'+
    '</br>'+
    '</br><h4>第１２条（ポイントの取消し）</h4>'+
    '１．当社は、会員が当社の定めるルール・条件に従ってポイントを取得しなかった場合又は成果の達成方法等が不正、虚偽であると発覚した場合、会員に対し一旦付与したポイントを取消すことができます。'+
    '</br>２．サーバーの混雑状況、震災、利用者の通信状況による不具合など、これらの予期しない動作によって、ポイントの付与が正常に行われていない場合、会員のポイント付与を無効とします。ただし、当社によって会員のポイントの取得が承認された場合はこの限りではありません。'+
    '</br>３．会員へのポイントの付与に関連して、当社が必要とする情報提供を会員が拒否する場合、ポイントの付与を取り消すことができるものとします。'+
    '</br>'+
    '</br><h4>第１３条（ポイントの利用）</h4>'+
    '１．会員は、当社が認める場合、自己の保有するポイントのうち当社が指定するポイント数を費消して当社が主催するイベントの参加にエントリーをすることができます。'+
    '</br>２．ポイントの保有数に関わらず、会員が一つのイベントの参加にエントリーすることができる回数は、１回を限度とします。'+
    '</br>３．当社は、前項のポイント利用の対象となるイベントを制限したり、ポイント利用に条件を追加したりすることがあります。'+
    '</br>４．会員がイベントの参加のエントリーにあたって自己の保有するポイントを利用したものの、イベントの参加の抽選に漏れた場合、会員は、ポイントの返還を受けることができません。ただし、事情により当社が相当と判断した場合には、ポイントの返還を行うことがあります。'+
    '</br>５．次の各号に該当する場合には、ポイントの利用ができないことがあります。'+
    '</br>(１)　本サイトのユーザーＩＤが不正に取得された疑いがある場合'+
    '</br>(２)　会員情報が登録削除されている場合'+
    '</br>(３)　本規約に基づき、本サービスの全部又は一部の提供が中断又は停止されている場合'+
    '</br>(４)　当社がポイントの利用を相当と認めない場合'+
    '</br>'+
    '</br><h4>第１４条（ポイントの確認）</h4>'+
    '会員は、ポイントの付与、ポイントの利用履歴及び利用できるポイントの残高を自己のアカウント情報にて確認することができます。'+
    '</br>'+
    '</br><h4>第１５条（ポイントの有効期限）</h4>'+
    'ポイントの有効期限は、会員が当該ポイントを取得した日の翌日から起算して、１年間とします。'+
    '</br>'+
    '</br><h3 align="center">－第３章　ユーザー情報の管理－</h3>'+
    '</br><h4>第１６条（ユーザーの情報の取り扱いについて）</h4>'+
    '１．当社は、本サービスをご利用になるユーザーの利便性を向上させるため及び統計データの作成や情報配信をおこなうために、ユーザー情報及びSP取得情報を取得することがあります。なお、ユーザー情報には、ユーザー個人を特定できる情報（氏名、メールアドレス、クレジットカード情報等）は含まれておりません。'+
    '</br>２．ユーザーが、スマートフォンアプリ内で当社所定の方法によりオプトアウト設定を行った場合、当社はSP取得情報を取得しません。'+
    '</br>３．当社は、SP取得情報を、モジュール提供者が提供する、本ソフトウェアに埋め込まれた情報収集モジュールにより、取得しております。なお、当社は、ユーザーへの情報配信及びSP取得情報の解析のため、モジュール提供者へSP取得情報を提供します。'+
    '</br>'+
    '</br><h4>第１７条（当社の保有する個人情報の取り扱いについて）</h4>'+
    '</br>当社は、ユーザーのプライバシーを尊重し、ユーザー皆様の個人情報の管理に細心の注意を払います。本サービスの管理・運営に当たって、当社がユーザーから取得した個人情報は、別途定める『プライバシーポリシー』に従って取り扱うものとします。'+
    '</br>'+
    '</br><h3 align="center">－第４章　禁止事項－</h3>'+
    '</br><h4>第１８条（ユーザーの禁止事項）</h4>'+
    '１．本サイト上に当社及び協力店が掲載する画像、コメント、その他の掲載情報等の著作権は当社又はそのライセンサーに帰属しているため、ユーザーが、著作権法で認められる引用の範囲を超えて、当社又はライセンサーの事前の書面による承諾なく、当該画像、協力店の掲載情報等を使用することは一切禁止するものとします。'+
    '</br>２．ユーザーは、本サービスの利用にあたって、以下の行為又は以下の行為に該当するおそれがあると当社が判断する行為を行ってはならないものとします。'+
    '</br>(１)　他人になりすまして情報を送信する行為'+
    '</br>(２)　当社の承認した以外の方法により本サービスを利用する行為'+
    '</br>(３)　本サービスを商用目的、政治活動目的又は宗教活動目的で利用する行為'+
    '</br>(４)　本サービスを無断で改変する行為'+
    '</br>(５)　当社のサーバー等のコンピューターに不正にアクセスしたり、有害なコンピュータプログラム等を送信又は書き込む行為及びスパムメール、チェーンレター、ジャンクメール等を送信する行為'+
    '</br>(６)　当社又は第三者（協力店を含みますが、これに限りません。以下、本項において同様とします。）の肖像権、著作権、商標権、その他の知的財産権を侵害し、又は侵害するおそれのある行為'+
    '</br>(７)　当社又は第三者を誹謗、中傷する行為又は名誉、プライバシー等を傷つける行為もしくはそれらのおそれのある行為'+
    '</br>(８)　自己、他人又は第三者の名称、住所、電話番号、電子メールアドレス等、意図的に虚偽の情報（実在しない架空の情報を含みますが、これに限りません）を登録する行為'+
    '</br>(９)　当社又は第三者に対する迷惑行為、不快感を抱かせる行為及び不利益となる行為'+
    '</br>(10)　犯罪的行為に結びつく行為'+
    '</br>(11)　本サービスの運営を妨げ、あるいは当社、当社の関連会社又は当社の提携先の信用を毀損させるような行為'+
    '</br>(12)　その他、法律、法令、公序良俗又は本規約に違反する行為又は違反のおそれのある行為'+
    '</br>３．当社は、ユーザーが前項に違反した場合、その他当社が本サービスの運営上不適当と判断する行為を行った場合には、当該ユーザーに対して、本サービスの利用停止、会員資格の剥奪、損害賠償請求等当社が必要と判断する措置（法的措置を含みますが、これに限りません。）を行うことができるものとします。'+
    '</br>４．本条第１項又は本条第２項に違反するユーザーの行為によって、当社又は第三者が損害を被った場合、当該ユーザーは、自己の責任と費用をもって、当該損害の一切を賠償しなければなりません。'+
    '</br><h3 align="center">－第５章　免　責－</h3>'+
    '</br><h4>第１９条（免責）</h4>'+
    '１．本サービスの利用にあたって、ユーザーと協力店との間で生じたトラブル（本サイト上に協力店が掲載した情報の誤りにより生じるトラブル等を含みますが、これに限りません。）については、当社に故意又は重過失がない限り、当社は一切責任を負いません。'+
    '</br>２．当社は、ユーザーの本サービスの利用（これらに伴う当社又は第三者による情報提供行為等を含みますが、これに限りません。）又は利用不能により生じる一切の損害（本項各号に定める損害や、前項によりユーザー又は第三者に生じた損害、精神的苦痛又はその他の金銭的損失を含む一切の不利益を含みますが、これらに限りません。）につき、当社に故意又は重過失がない限り、当社は一切その責任を負わないものとします。'+
    '</br>(１)　本サービスを介して行う、第三者が提供するコンテンツのダウンロード及び第三者が管理・運営するリンクサイトへのアクセス等の行為により、ユーザーに生じた損害'+
    '</br>(２)　当社が相当の安全策を講じたにも拘わらず、本サービスの無断改変、本サービスに関するデータへの不正アクセス、コンピュータウィルスの混入等の不正行為が行われ、これに起因してユーザーに生じた損害'+
    '</br>(３)　通信回線やコンピューターの障害等による、当社のサーバーやシステム、本サービスの中断、遅延、中止、データ消失等により生じた損害'+
    '</br>３．前各項において、当社が責任を負う場合であっても、当社の責任は直接かつ通常の損害に限られるものとします。'+
    '</br>４．本規約第２０条に基づいて、本サービスの運用が一時的に停止され、これに起因してユーザーに損害が発生した場合、当社は一切責任を負担しないものとします。'+
    '</br>５．当社は、本規約第２１条に基づいて、本サービスが変更又は終了され、これに起因してユーザーに不利益又は損害が生じた場合でも、これについての一切の責任を負わないものとします。'+
    '</br>'+
    '</br><h3 align="center">－第６章　雑　則－</h3>'+
    '</br><h4>第２０条（本サービスの一時的な停止）</h4>'+
    '当社は、次の各号に該当する場合、ユーザーへの事前の通知や承諾なしに、本サービスの一時的な運用の停止を行うことがあります。'+
    '</br>(1)　本サービスの保守又は仕様の変更を行う場合'+
    '</br>(2)　天災、事変その他非常事態が発生し、又は発生するおそれがあり、本サービスの運営が困難又は不可能となった場合'+
    '</br>(3)　当社が、本サービスの運営上及びその他の理由で本サービスの一時的な運用停止が必要と判断した場合'+
    '</br>'+
    '</br><h4>第２１条（本サービスの変更・終了）</h4>'+
    '当社は、ユーザーに事前に通知することなく、本サービスの内容又は本サービス提供の条件の変更（ポイントの廃止、ポイント付与の停止、ポイント付与率の変更を含みますが、これに限りません。）を行うことがあり、本サービスの全部又は一部を終了させることがあります。ユーザーは、これをあらかじめ承諾するものとします。'+
    '</br>'+
    '</br><h4>第２２条（権利義務の譲渡禁止）</h4>'+
    'ユーザーは、本サービスに関するユーザーとしての地位及び当該地位に基づく権利義務を、当社が予め承諾した場合を除き、第三者に譲渡し又は担保に供してはならないものとします。'+
    '</br>'+
    '</br><h4>第２３条（準拠法及び管轄）</h4>'+
    '本規約は日本法に基づいて解釈され、本規約及び諸注意等並びにに本サービスに関する紛争の第一審の専属的合意管轄裁判所は、岡山地方裁判所又は岡山簡易裁判所とします。'+
    '</br>'+
    '</br>附則'+
    '</br>２０１８年５月４日　施行';

    $('html,body').animate({scrollTop:0}, 0);
  }]);
