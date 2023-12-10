import dateFns from 'date-fns/locale/es';

export default {
  dateFns,

  format: {
    date: 'M/d/yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'MMM d',
    longDateTime: "MMMM d 'a' p",
  },

  translation: {
    common: {
      account: 'Cuenta',
      actions: 'Acciones',
      addAttachment_title: 'Añadir un adjunto',
      addComment: 'Añadir un comentario',
      addMember_title: 'Añadir un miembro',
      addUser_title: 'Añadir usuario',
      administrator: 'Administrador',
      all: 'Todos',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Todos los cambios serán automáticamente guardados<br />después de que se restaure la conexión.',
      areYouSureYouWantToDeleteThisAttachment: '¿Estás seguro de que quieres borrar este adjunto?',
      areYouSureYouWantToDeleteThisBoard: '¿Estás seguro de que quieres borrar este tablero?',
      areYouSureYouWantToDeleteThisCard: '¿Estás seguro de que quieres borrar esta tarjeta?',
      areYouSureYouWantToDeleteThisComment: '¿Estás seguro de que quieres borrar este comentario?',
      areYouSureYouWantToDeleteThisLabel: '¿Estás seguro de que quieres borrar esta etiqueta?',
      areYouSureYouWantToDeleteThisList: '¿Estás seguro de que quieres borrar esta lista?',
      areYouSureYouWantToDeleteThisProject: '¿Estás seguro de que quieres borrar este proyecto?',
      areYouSureYouWantToDeleteThisTask: '¿Estás seguro de que quieres borrar esta tarea?',
      areYouSureYouWantToDeleteThisUser: '¿Estás seguro de que quieres borrar este usuario?',
      areYouSureYouWantToRemoveThisMemberFromProject:
        '¿Estás seguro de que quieres remover a este miembro del proyecto?',
      attachment: 'Adjunto',
      attachments: 'Adjuntos',
      authentication: 'Autenticación',
      board: 'Tablero',
      boardNotFound_title: 'Tablero no encontrado',
      cardActions_title: 'Acciones de las tarjetas',
      cardNotFound_title: 'tarjeta no encontrada',
      cardOrActionAreDeleted: 'La tarjeta o la acción está eliminada.',
      color: 'Color',
      createBoard_title: 'Crear Tablero',
      createLabel_title: 'Crear Etiqueta',
      createNewOneOrSelectExistingOne: 'Crear uno nuevo o seleccionar<br />uno existente.',
      createProject_title: 'Crear Proyecto',
      createTextFile_title: 'Crear archivo de Texto',
      currentPassword: 'Contraseña Actual',
      date: 'Fecha',
      dueDate_title: 'Fecha de Vencimiento',
      deleteAttachment_title: 'Eliminar Adjunto',
      deleteBoard_title: 'Borrar Tablero',
      deleteCard_title: 'Borrar tarjeta',
      deleteComment_title: 'Borrar Comentario',
      deleteLabel_title: 'Borrar Etiqueta',
      deleteList_title: 'Borrar Lista',
      deleteProject_title: 'Borrar Proyecto',
      deleteTask_title: 'Borrar Tarea',
      deleteUser_title: 'Borrar Usuario',
      description: 'Descripción',
      dropFileToUpload: 'Arrastra un archivo para subirlo',
      editAttachment_title: 'Editar adjunto',
      editAvatar_title: 'Editar avatar',
      editBoard_title: 'Editar Tablero',
      editDueDate_title: 'Editar Fecha de Vencimiento',
      editEmail_title: 'Editar Correo',
      editLabel_title: 'Editar Etiqueta',
      editPassword_title: 'Editar Contraseña',
      editStopwatch_title: 'Editar Temporizador',
      editUsername_title: 'Edit nombre de usuario',
      email: 'Correo',
      emailAlreadyInUse: 'El correo ya está en uso',
      enterCardTitle: 'Escribe el título de la tarjeta...',
      enterDescription: 'Escribe la descripción...',
      enterFilename: 'Escribe el nombre del archivo',
      enterListTitle: 'Escribe el título de la lista...',
      enterProjectTitle: 'Escribe el nombre del proyecto',
      enterTaskDescription: 'Escribe la descripción de la tarea...',
      filterByLabels_title: 'Filtrar por Etiquetas',
      filterByMembers_title: 'Filtrar por Miembros',
      fromComputer_title: 'Desde Computador',
      hours: 'Horas',
      invalidCurrentPassword: 'Contraseña actual invalida',
      labels: 'Etíquetas',
      list: 'Lista',
      listActions_title: 'Acciónes de Lista',
      members: 'Miembros',
      minutes: 'Minutos',
      moveCard_title: 'Mover tarjeta',
      name: 'Nombre',
      newEmail: 'Nuevo correo',
      newPassword: 'Nueva contraseña',
      newUsername: 'Nuevo nombre de usuario',
      noConnectionToServer: 'Sin conexión al servidor',
      noBoards: 'Sin tableros',
      noLists: 'Sin listas',
      noProjects: 'Sin proyectos',
      notifications: 'Notificaciones',
      noUnreadNotifications: 'No hay notificaciones sin leer',
      openBoard_title: 'Abrir Tablero',
      optional_inline: 'opcional',
      organization: 'Organización',
      phone: 'Teléfono',
      preferences: 'Preferencias',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Tip: presiona Ctrl-V (Cmd-V en Mac) para añadir adjuntos desde el portapapeles.',
      project: 'Proyecto',
      projectNotFound_title: 'Proyecto no encontrado',
      removeMember_title: 'Remover Miembro',
      seconds: 'Segundos',
      selectBoard: 'Seleccionar Tablero',
      selectList: 'Seleccionar Lista',
      selectProject: 'Seleccionar Proyecto',
      settings: 'Configuraciones',
      stopwatch: 'Temporizador',
      subscribeToMyOwnCardsByDefault: 'Suscribirme a mis propias tarjetas por defecto',
      taskActions_title: 'Acciones de Tareas',
      tasks: 'Tareas',
      time: 'Tiempo',
      title: 'Título',
      userActions_title: 'Acciones de Usuario',
      userAddedThisCardToList: '<0>{{user}}</0><1> añadido a esta tarjeta en {{list}}</1>',
      userLeftNewCommentToCard:
        '{{user}} dejó un nuevo comentario «{{comment}}» en <2>{{card}}</2>',
      userMovedCardFromListToList: '{{user}} movió <2>{{card}}</2> de {{fromList}} a {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> movió esta tarjeta de {{fromList}} a {{toList}}</1>',
      username: 'Nombre de usuario',
      usernameAlreadyInUse: 'El nombre de usuario ya está en uso',
      users: 'Usuarios',
      writeComment: 'Escribir un comentario...',
    },

    action: {
      addAnotherCard: 'Añadir otra tarjeta',
      addAnotherList: 'Añadir otra lista',
      addAnotherTask: 'Añadir otra tarea',
      addCard: 'Añadir tarjeta',
      addCard_title: 'Añadir tarjeta',
      addComment: 'Añadir comentario',
      addList: 'Añadir lista',
      addMoreDetailedDescription: 'Añadir una descripción más detallada',
      addTask: 'Añadir tarea',
      addToCard: 'Añadir a la tarjeta',
      addUser: 'Añadir usuario',
      createBoard: 'Crear tablero',
      createFile: 'Crear archivo',
      createLabel: 'Crear etiqueta',
      createNewLabel: 'Crear una nueva etiqueta',
      createProject: 'Crear proyecto',
      delete: 'Borrar',
      deleteAttachment: 'Borrar adjuntos',
      deleteAvatar: 'Borrar avatar',
      deleteBoard: 'Borrar tablero',
      deleteCard: 'Borrar tarjeta',
      deleteCard_title: 'Borrar tarjeta',
      deleteComment: 'Borrar comentario',
      deleteImage: 'Borrar imagen',
      deleteLabel: 'Borrar etiqueta',
      deleteList: 'Borrar lista',
      deleteList_title: 'Borrar Lista',
      deleteProject: 'Borrar proyecto',
      deleteProject_title: 'Borrar Proyecto',
      deleteTask: 'Borrar tarea',
      deleteTask_title: 'Borrar Tarea',
      deleteUser: 'Delete usuario',
      edit: 'Editar',
      editDueDate_title: 'Editar Fecha de Vencimiento',
      editDescription_title: 'Editar Descripción',
      editEmail_title: 'Editar Correo',
      editPassword_title: 'Editar Contraseña',
      editStopwatch_title: 'Edit Temporizador',
      editTitle_title: 'Edit Título',
      editUsername_title: 'Editar Nombre de Usuario',
      logOut_title: 'Cerrar Sesión',
      makeCover_title: 'Hacer Cubierta',
      move: 'Mover',
      moveCard_title: 'Mover Tarjeta',
      remove: 'Remover',
      removeBackground: 'Remover fondo',
      removeCover_title: 'Remover Cubierta',
      removeFromProject: 'Remover del Proyecto',
      removeMember: 'Remover miembro',
      save: 'Guardar',
      showAllAttachments: 'Mostrar todos los adjuntos ({{hidden}} hidden)',
      showFewerAttachments: 'Mostrar menos adjuntos',
      start: 'Iniciar',
      stop: 'Parar',
      subscribe: 'Suscribirse',
      unsubscribe: 'Desuscribirse',
      uploadNewAvatar: 'Subir un nuevo avatar',
      uploadNewImage: 'Subir una nueva imagen',
    },
  },
};
