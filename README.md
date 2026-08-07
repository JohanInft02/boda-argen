# Boda de Argentina & José 💍

Esta es la página web de invitación para la boda de **Argentina y José**, quienes después de **41 años de amor** decidieron celebrar su unión ante Dios y ante sus seres queridos.

La idea de esta página es contarle a cada invitado la historia de la pareja, darle toda la información importante del evento y permitirle confirmar su asistencia, todo desde un solo lugar, ya sea desde el celular o desde la computadora.

## ¿Qué encuentra un invitado al entrar a la página?

Cuando alguien abre el link de la invitación, va recorriendo la página de arriba hacia abajo y encuentra, en este orden:

1. **Portada principal**: una foto de la pareja, sus nombres, la fecha de la boda (5 de septiembre de 2026) y el lugar (Ciudad de Panamá).
2. **La invitación**: un mensaje cálido y personal de Argentina y José invitando a acompañarlos en este día tan especial, contando un poco de su historia de 41 años juntos.
3. **Cuenta regresiva**: un contador en vivo que muestra cuántos días, horas, minutos y segundos faltan para la boda.
4. **Galería de recuerdos**: una colección de fotos de la pareja a lo largo de los años (desde su boda civil en 1985 hasta la actualidad), cada una con su año y una pequeña descripción.
5. **Ubicaciones**: los datos de la ceremonia religiosa (Iglesia Ágape, a las 2:00 p.m.) y de la recepción (Restaurante Sunly, a las 5:00 p.m.), cada una con un enlace directo a Google Maps para llegar sin problema.
6. **Detalles importantes**: información práctica como el código de vestimenta (semi formal), el pedido de confirmar la asistencia dentro de los próximos 3 días, y que en lugar de regalos se sugiere una "lluvia de sobres".
7. **Confirmación de asistencia (RSVP)**: un formulario sencillo donde el invitado escribe su nombre, cuántas personas asistirán, si podrá o no acompañarlos, y puede dejar un mensaje opcional para los novios.
8. **Pie de página**: un cierre con un agradecimiento final y la fecha de la boda.

## ¿Cómo se ve el diseño?

La página tiene un estilo elegante y romántico, con tipografía delicada, colores suaves y efectos de movimiento al hacer scroll (las imágenes se desplazan a un ritmo distinto al del texto, dando una sensación de profundidad). Está pensada para verse bien tanto en el celular como en pantallas grandes.

## Sobre el formulario de confirmación

Por ahora, el formulario de "Confirmar asistencia" es solamente visual: cuando alguien lo completa y lo envía, la página le muestra un mensaje de agradecimiento en pantalla, pero esa información **no se guarda todavía en ningún lado** (no hay una base de datos ni se envía un correo). Si en el futuro se quiere recibir de verdad esas confirmaciones, habría que conectar el formulario a algún sistema que las reciba y las guarde.

## ¿Cómo se cambia el contenido de la página?

Todo el texto que aparece en la página (nombres, fechas, direcciones, mensajes, fotos, etc.) está guardado en un solo archivo fácil de editar: `data/content.json`. Ahí se puede cambiar cualquier dato sin tener que tocar el diseño de la página, por ejemplo:

- La fecha y hora de la boda.
- Los textos de cada sección.
- Las fotos de la galería (y el año/descripción de cada una).
- Las direcciones y horarios de la iglesia y del restaurante.
- Los textos del formulario de confirmación.

## Resumen

En pocas palabras, este proyecto es una invitación de boda digital, cariñosa y personalizada, que cuenta la historia de Argentina y José, muestra sus recuerdos, informa todos los detalles del evento y le da a cada invitado la posibilidad de confirmar que asistirá a celebrar con ellos.
