import dateFns from 'date-fns/locale/ja';

export default {
  dateFns,

  format: {
    date: 'yyyy/M/d',
    time: 'HH:mm',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'MMMMd日',
    longDateTime: "MMMMd'日 ' HH:mm",
  },

  translation: {
    common: {
      aboutPlanka: 'About Planka',
      account: 'アカウント',
      actions: 'アクション',
      addAttachment_title: '添付ファイルを追加',
      addComment: 'コメントを追加',
      addManager_title: 'マネージャーを追加',
      addMember_title: 'メンバーを追加',
      addUser_title: 'ユーザーを追加',
      administrator: '管理者',
      all: 'すべて',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        '全ての変更は接続回復後自動的に保存されます',
      areYouSureYouWantToDeleteThisAttachment: 'この添付ファイルを削除してもよろしいですか？',
      areYouSureYouWantToDeleteThisBoard: 'このボードを削除してもよろしいですか？',
      areYouSureYouWantToDeleteThisCard: 'このカードを削除してもよろしいですか？',
      areYouSureYouWantToDeleteThisComment: 'このコメントを削除してもよろしいですか？',
      areYouSureYouWantToDeleteThisLabel: 'このラベルを削除してもよろしいですか？',
      areYouSureYouWantToDeleteThisList: 'このリストを削除してもよろしいですか？',
      areYouSureYouWantToDeleteThisProject: 'このプロジェクトを削除してもよろしいですか？',
      areYouSureYouWantToDeleteThisTask: 'このタスクを削除してもよろしいですか？',
      areYouSureYouWantToDeleteThisUser: 'このユーザーを削除してもよろしいですか？',
      areYouSureYouWantToLeaveBoard: 'ボードから退出してもよろしいですか？',
      areYouSureYouWantToLeaveProject: 'プロジェクトから退出してもよろしいですか？',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'このマネージャーをプロジェクトから外してもよろしいですか？',
      areYouSureYouWantToRemoveThisMemberFromBoard:
        'このメンバーをボードから外してもよろしいですか？',
      attachment: '添付ファイル',
      attachments: '添付ファイル',
      authentication: '認証',
      background: '背景',
      board: 'ボード',
      boardNotFound_title: 'ボードが見つかりません',
      canComment: 'コメントを作成することができます',
      canEditContentOfBoard: 'ボードコンテンツを修正することができます',
      canOnlyViewBoard: 'ボードの読み取りのみ可能です',
      cardActions_title: 'カードのアクション',
      cardNotFound_title: 'カードが見つかりません',
      cardOrActionAreDeleted: 'カードやアクションが削除されます',
      color: '色',
      createBoard_title: 'ボードを作成',
      createLabel_title: 'ラベルを作成',
      createNewOneOrSelectExistingOne: '新規作成もしくは既存のものから選択',
      createProject_title: 'プロジェクトを作成',
      createTextFile_title: 'テキストファイルを作成',
      currentPassword: '現在のパスワード',
      dangerZone_title: '危険ゾーン',
      date: '日付',
      dueDate_title: '期限',
      deleteAttachment_title: '添付ファイルを削除',
      deleteBoard_title: 'ボードを削除',
      deleteCard_title: 'カードを削除',
      deleteComment_title: 'コメントを削除',
      deleteLabel_title: 'ラベルを削除',
      deleteList_title: 'リストを削除',
      deleteProject_title: 'プロジェクトを削除',
      deleteTask_title: 'タスクを削除',
      deleteUser_title: 'ユーザーを削除',
      description: '説明',
      detectAutomatically: '自動的に検知',
      dropFileToUpload: 'ファイルをドロップしてアップロード',
      editor: 'エディター',
      editAttachment_title: '添付ファイルを編集',
      editAvatar_title: 'アバターを編集',
      editBoard_title: 'ボードを編集',
      editDueDate_title: '期限を編集',
      editEmail_title: 'Eメールを編集',
      editInformation_title: '情報を編集',
      editLabel_title: 'ラベルを編集',
      editPassword_title: 'パスワードを編集',
      editPermissions_title: '権限を編集',
      editStopwatch_title: 'タイマーを編集',
      editUsername_title: 'ユーザー名を編集',
      email: 'Eメール',
      emailAlreadyInUse: 'Eメールは既に使われています',
      enterCardTitle: 'カードのタイトルを入力... [Ctrl+Enter]で自動的に開く。',
      enterDescription: '説明を入力...',
      enterFilename: 'ファイル名を入力...',
      enterListTitle: 'リストのタイトルを入力...',
      enterProjectTitle: 'プロジェクトのタイトルを入力',
      enterTaskDescription: 'タスクの説明を入力...',
      filterByLabels_title: 'ラベルで絞り込む',
      filterByMembers_title: 'メンバーで絞り込む',
      fromComputer_title: 'コンピューターから',
      fromTrello: 'Trelloから',
      general: '一般',
      hours: '時間',
      importBoard_title: 'インポートボード',
      invalidCurrentPassword: '現在のパスワードが無効',
      labels: 'ラベル',
      language: '使用言語',
      leaveBoard_title: 'ボードから退出',
      leaveProject_title: 'プロジェクトから退出',
      list: 'リスト',
      listActions_title: 'アクションのリスト',
      managers: 'マネージャー',
      members: 'メンバー',
      minutes: '分',
      moveCard_title: 'カードを移動',
      name: '名前',
      newEmail: '新しいEメール',
      newPassword: '新しいパスワード',
      newUsername: '新しいユーザー名',
      noConnectionToServer: 'サーバーへ接続されていません',
      noBoards: 'ボードがありません',
      noLists: 'リストがありません',
      noProjects: 'プロジェクトがありません',
      notifications: '通知',
      noUnreadNotifications: '未読の通知はありません',
      openBoard_title: 'ボードを開く',
      optional_inline: '任意',
      organization: '組織',
      phone: '電話番号',
      preferences: '環境設定',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'ヒント: Ctrl-V(MacではCmd-V)を押して、クリップボードから添付ファイルを追加します',
      project: 'プロジェクト',
      projectNotFound_title: 'プロジェクトがありません',
      removeManager_title: 'マネージャーを削除',
      removeMember_title: 'メンバーを削除',
      searchLabels: 'ラベルから探す...',
      searchMembers: 'メンバーから探す...',
      searchUsers: 'ユーザーから探す...',
      seconds: '秒',
      selectBoard: 'ボードを選択',
      selectList: 'リストを選択',
      selectPermissions_title: '権限を選択',
      selectProject: 'プロジェクトを選択',
      settings: '設定',
      stopwatch: 'タイマー',
      subscribeToMyOwnCardsByDefault: '自分のカードをデフォルトで購読する',
      taskActions_title: 'タスクのアクション',
      tasks: 'タスク',
      thereIsNoPreviewAvailableForThisAttachment:
        'この添付ファイルにはプレビューがありません。',
      time: '時間',
      title: 'タイトル',
      userActions_title: 'ユーザーのアクション',
      userAddedThisCardToList: '<0>{{user}}</0> 様が <1>{{list}} をこのカードに追加しました</1>',
      userLeftNewCommentToCard:
        '{{user}} 様が <2> {{card}} </2> に新しいコメント «{{comment}}» を残しました',
      userMovedCardFromListToList:
        '{{user}} 様が <2> {{card}} </2> を {{fromList}} から {{toList}} に移動しました',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0> <1>様がこのカードを {{fromList}} から {{toList}} に移動しました</1>',
      username: 'ユーザー名',
      usernameAlreadyInUse: 'ユーザー名は既に使われています',
      users: 'ユーザー',
      version: 'バージョン',
      viewer: 'ビューア',
      writeComment: 'コメントを書く...',
    },

    action: {
      addAnotherCard: '別のカードを追加',
      addAnotherList: '別のリストを追加',
      addAnotherTask: '別のタスクを追加',
      addCard: 'カードを追加',
      addCard_title: 'カードを追加',
      addComment: 'コメントを追加',
      addList: 'リストを追加',
      addMember: 'メンバーを追加',
      addMoreDetailedDescription: 'より詳細な説明を追加',
      addTask: 'タスクを追加',
      addToCard: 'カードに追加',
      addUser: 'ユーザーを追加',
      createBoard: 'ボードを作成',
      createFile: 'ファイルを作成',
      createLabel: 'ラベルを作成',
      createNewLabel: '新しいラベルを作成',
      createProject: 'プロジェクトを作成',
      delete: '削除',
      deleteAttachment: '添付ファイルを削除',
      deleteAvatar: 'アバターを削除',
      deleteBoard: 'ボードを削除',
      deleteCard: 'カードを削除',
      deleteCard_title: 'カードを削除',
      deleteComment: 'コメントを削除',
      deleteImage: '画像を削除',
      deleteLabel: 'ラベルを削除',
      deleteList: 'リストを削除',
      deleteList_title: 'リストを削除',
      deleteProject: 'プロジェクトを削除',
      deleteProject_title: 'プロジェクトを削除',
      deleteTask: 'タスクを削除',
      deleteTask_title: 'タスクを削除',
      deleteUser: 'ユーザーを削除',
      edit: '編集',
      editDueDate_title: '期限を編集',
      editDescription_title: '説明を編集',
      editEmail_title: 'Eメールを編集',
      editInformation_title: '情報を編集',
      editPassword_title: 'パスワードの編集',
      editPermissions: '権限を編集',
      editStopwatch_title: 'タイマーの編集',
      editTitle_title: 'タイトルの編集',
      editUsername_title: 'ユーザー名の編集',
      hideDetails: '詳細を隠す',
      import: 'インポート',
      leaveBoard: 'ボードから退出',
      leaveProject: 'プロジェクトから退出',
      logOut_title: 'ログアウト',
      makeCover_title: 'カバーを作る',
      move: '移動',
      moveCard_title: 'カードを移動',
      remove: '削除',
      removeBackground: '背景を削除',
      removeCover_title: 'カバーを削除',
      removeFromBoard: 'ボードから削除',
      removeFromProject: 'プロジェクトから削除',
      removeManager: 'マネージャーを削除',
      removeMember: 'メンバーを削除',
      save: '保存',
      showAllAttachments: '全ての添付ファイルを表示する({{hidden}} 非表示)',
      showDetails: '詳細を表示',
      showFewerAttachments: 'テンプファイルの表示数を減らす',
      start: 'スタート',
      stop: 'ストップ',
      subscribe: '購読',
      unsubscribe: '購読解除',
      uploadNewAvatar: '新しいアバターをアップロード',
      uploadNewImage: '新しい画像をアップロード',
    },
  },
};
