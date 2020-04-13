import React from 'react'

import { Blank } from 'grommet-icons'

const HighDiveIcon = props => (
  <Blank viewBox="0 0 100 75" a11yTitle="High Dive Records" {...props}>
    <path
      d="M98.234.107c-.168.056-.767.28-1.329.486-.786.28-1.16.58-1.609 1.217-.318.467-.805.898-1.067.973-.28.074-.898.467-1.384.898-2.153 1.853-4.024 2.863-5.708 3.05-1.572.188-2.62.674-3.387 1.554-.73.823-.936 1.44-.768 2.339.412 2.096.393 2.414-.243 3.33-.318.487-.767.993-.973 1.143-1.366.991-6.27 5.296-7.168 6.269-1.291 1.44-1.89 2.545-2.582 4.716-.281.935-1.16 2.956-1.946 4.51-1.591 3.2-2.64 4.435-5.128 6.082-.749.486-2.433 1.909-3.743 3.144-5.446 5.184-6.045 5.595-9.114 6.213-2.788.561-3.724.936-5.427 2.152-1.647 1.179-2.208 1.984-2.975 4.286-1.067 3.087-1.254 3.368-2.77 4.117-.992.486-1.628.655-2.657.71-.749.057-1.441 0-1.554-.112-.13-.13-.037-.524.3-1.16.393-.805 1.104-3.013 1.104-3.48 0-.075-.187-.207-.43-.3-.394-.131-.45-.3-.45-1.347 0-1.61-.15-1.722-1.647-1.292-1.478.412-2.339 1.329-2.994 3.238-.243.692-.636 1.553-.898 1.927-.243.375-.393.73-.337.786.225.225 1.217-1.16 1.553-2.17.337-1.067 1.198-2.733 1.404-2.733.056 0 .037.28-.037.618-.188.823.205.58.505-.318.337-1.03.823-.917.655.15-.15.991.15.804.505-.319.131-.412.337-.711.468-.673.3.112.412 2.301.15 3.2-.225.842.018 1.066.374.336l.28-.542.075.486c.057.318-.205 1.067-.673 2.003l-.767 1.516-.88-.094c-1.404-.168-5.446-1.422-7.261-2.264-.898-.412-1.684-.712-1.74-.655-.075.056.224.374.617.71.936.768 1.422 1.741 1.703 3.388.168.936.187 1.553.037 2.227-.13.524-.262 1.347-.336 1.815-.057.487-.3 1.385-.506 2.003-.355.991-.524 1.16-1.59 1.796-1.273.767-3.182 1.217-5.072 1.217-.805 0-1.291-.131-1.853-.487-3.873-2.395-7.036-7.523-6.475-10.555.356-2.04 2.04-4.098 4.08-5.034.561-.262 1.31-.599 1.703-.767.618-.3.636-.318.187-.337-.28 0-1.141.3-1.946.674-1.647.786-3.275 2.34-3.986 3.799-.637 1.291-.73 3.836-.187 5.333.71 2.04 1.59 3.949 2.208 4.847.337.487.543.955.468 1.03-.075.074-.243-.057-.412-.262-.15-.225-.43-.6-.617-.843-.525-.692-6.158-5.745-6.962-6.25-.393-.262-.767-.543-.824-.636-.074-.113.637-1.03 1.554-2.059 2.283-2.545 3.574-3.406 4.81-3.163.523.113.692.019 1.365-.73.43-.486.843-1.029.899-1.216.074-.206.243-.318.374-.262.73.28.936-1.03.262-1.59-.73-.58-1.142-1.348-.88-1.61.73-.73 2.115.711 2.115 2.227 0 .786.056.823 1.03.412.879-.356.991-.693.71-2.059-.262-1.347-.468-1.759-.748-1.478-.113.112-.636.168-1.198.13l-.992-.074.6-.749c.317-.411.804-1.104 1.047-1.572l.468-.823.505.655c.655.88 1.18 2.77 1.16 4.154-.018.786.038 1.105.188 1.01.3-.186.018-3.648-.356-4.584-.168-.393-.58-.992-.917-1.347-.337-.337-.823-.861-1.067-1.142-.28-.3-.58-.468-.748-.393-.169.056-.842-.075-1.516-.3-1.048-.355-1.516-.411-3.275-.317-2.489.15-4.08.636-5.783 1.796-1.253.86-3.256 3.256-3.256 3.911 0 .206.262.6.58.88.711.617.786.992.113.542-.6-.393-.899-.393-.899-.018 0 .15-.524.748-1.179 1.31-1.272 1.123-1.46 1.628-.767 2.245.3.281.374.506.28.955-.055.337 0 1.067.113 1.628.187.824.187 1.142-.019 1.516-.617 1.16.543 2.283 2.34 2.264 1.796 0 3.536.899 5.913 3.07 1.142 1.01 2.527 2.208 3.07 2.638.56.412 1.216 1.067 1.478 1.422.673.955 2.545 3.163 2.9 3.425.188.131 1.03 1.048 1.89 2.04 1.984 2.302 3.575 3.443 5.577 4.023 1.404.412 1.61.43 2.976.188 1.123-.188 1.834-.206 3.032-.038 3.125.412 4.753.169 7.785-1.216 1.31-.6 4.697-1.76 7.448-2.583 1.759-.505 5.315-2.264 6.98-3.424.655-.468 1.441-.955 1.722-1.105.3-.168 1.59-1.31 2.863-2.582 1.291-1.254 2.807-2.601 3.387-2.976 1.853-1.179 8.197-7.972 9.095-9.712.169-.319.73-1.198 1.236-1.928.524-.749 1.403-2.058 1.983-2.92.562-.86 1.834-2.77 2.826-4.229 1.441-2.17 1.89-2.994 2.377-4.529.318-1.01.711-2.17.842-2.545.13-.374.355-1.085.505-1.572.28-.973 1.16-2.713 1.834-3.63.243-.337.786-1.347 1.198-2.264.748-1.61 2.208-4.23 3.874-6.887.823-1.31 4.154-5.427 6.924-8.534.88-.973 1.89-2.208 2.264-2.714.375-.523 1.048-1.366 1.479-1.89 2.17-2.507 4.154-5.95 3.91-6.718-.167-.543-1.478-.917-2.245-.617zM15.986 66.785c.3.449.486.842.449.898-.131.131-1.123-1.179-1.123-1.478 0-.375.112-.262.674.58zm37.821-19.762c.73.636 1.984 2.657 1.984 3.219 0 .262-.842 1.347-2.284 2.919-1.253 1.385-2.413 2.713-2.582 2.957-.674 1.01.019.542 1.76-1.18 1.758-1.758 3.405-3.068 3.592-2.881.056.056-.692.767-1.665 1.61-2.396 2.058-3.874 3.836-5.11 6.137-1.197 2.227-1.14 2.153-1.29 2.003-.057-.056.205-.749.598-1.535.393-.767.674-1.44.637-1.497-.15-.131-1.123 1.104-1.61 2.077-.58 1.16-2.582 3.05-3.743 3.556-1.179.505-.991.823.3.487 1.048-.262 2.826-1.441 3.163-2.096.112-.206.261-.337.318-.281.13.13-.6 1.31-1.16 1.815-.88.805-3.126 1.572-6.158 2.096-6.344 1.104-9.188 1.086-11.584-.019-.73-.355-1.29-.673-1.235-.73.056-.056.786.132 1.647.412 3.78 1.273 11.584.318 11.023-1.328-.056-.187-.6-.262-1.928-.262-1.59 0-2.002-.075-2.957-.524-.617-.281-1.703-1.067-2.414-1.722-.71-.655-1.403-1.142-1.516-1.085-.112.093-.15.411-.074.786.13.73-.188 1.085-.58.655-.132-.15-.356-1.142-.469-2.227-.15-1.254-.411-2.34-.73-3.032-.261-.58-.467-1.123-.467-1.216 0-.094.411-.02.917.13 3.406 1.086 5.502 1.516 7.617 1.535 2.114.019 2.208 0 3.368-.636.674-.356 1.385-.842 1.61-1.086.205-.224.804-1.515 1.31-2.863.505-1.347 1.197-2.807 1.534-3.238 1.366-1.702 4.435-3.144 7.355-3.424.112-.019.486.206.823.468zM33.203 22.26c0-.28.131-.559.3-.633.504-.187 1.066.542 1.103 1.46.057 1.646.113 1.628 2.321-1.03.711-.842 1.703-1.852 2.208-2.264.824-.655 1.03-.73 1.666-.637 1.048.15 1.179.319 1.347 1.685.075.655.225 1.347.337 1.534.28.45-.543 2.508-2.227 5.483-1.59 2.789-1.871 3.144-3.93 4.716-1.553 1.198-1.665 1.385-2.358 3.724-.374 1.31-1.722 4.642-2.17 5.409-.412.692-.824 1.74-1.648 4.08-.243.73-.73 1.759-1.048 2.264-.318.505-.935 1.553-1.347 2.32-1.085 1.928-3.294 4.754-4.435 5.67-1.104.918-.917 1.199.28.413.6-.393.843-.468 1.011-.3.225.206.28 1.928.131 3.724-.037.487 0 1.404.094 2.021.093.73.093 1.123-.038 1.123-.262.019-.673-2.582-.599-3.799.038-.804-.018-.973-.337-1.104-1.497-.543-3.836 1.946-3.537 3.762.15.898-.187 1.048-.523.224-.131-.374-.15-.842 0-1.534.112-.543.243-1.31.318-1.722.093-.58.486-1.123 1.965-2.657 2.301-2.377 5.801-7.018 5.801-7.654 0-.132-.243-.244-.543-.281-.524-.075-.524-.075.281-.505 1.048-.562 1.291-.918 2.17-3.182.394-1.03 1.086-2.62 1.535-3.556 1.048-2.133 1.76-3.91 2.34-5.895l.449-1.59-.487-.58c-.561-.693-.468-.936.262-.6.468.207.636.17 1.46-.373.524-.319.992-.73 1.067-.899.074-.187.262-.243.561-.168.374.093.599-.019 1.03-.524.299-.374.692-.973.86-1.348.169-.374.506-.973.749-1.31.823-1.141 2.077-3.986 2.058-4.64-.018-.356-.037-.88-.037-1.16-.019-.3-.094-.6-.206-.656-.094-.056-.187-.374-.187-.673 0-.468-.094-.562-.636-.674-.618-.131-.749-.038-3.631 2.92-1.647 1.683-2.994 3.2-2.994 3.349 0 .168-.15.28-.3.28-.411 0-.374-.486.094-1.702.412-1.086.505-1.928.224-2.096-.13-.094-1.796 3.574-1.796 3.986 0 .093-.169.561-.393 1.03-.524 1.16-.505 2.75.019 3.854.486.992.374 1.273-.281.674-.468-.45-.992-.618-.561-.187.355.337.28 1.104-.225 2.62-.599 1.759-1.16 2.863-2.751 5.352-.71 1.12-1.475 2.577-1.702 3.252l-.003.011c-.414 1.234-1.402 2.687-1.682 2.426-.075-.075-.056-.262.075-.393.112-.131.505-1.048.86-2.021.375-.973 1.254-2.695 1.965-3.837 1.516-2.395 2.134-3.63 2.602-5.071.542-1.628.224-1.404-.674.505-.43.955-1.048 2.04-1.347 2.414-1.18 1.498-2.284 3.294-2.882 4.716-1.18 2.77-1.853 3.912-3.275 5.465-.786.86-1.74 1.927-2.096 2.377-.356.449-.712.786-.749.73-.13-.132 1.31-2.078 2.9-3.93.974-1.123 1.46-1.89 1.947-3.107.973-2.47 1.703-3.836 2.976-5.502.636-.823 1.16-1.553 1.16-1.61 0-.074.524-1.216 1.16-2.563.917-1.91 1.235-2.845 1.479-4.267.28-1.628 1.328-4.66 2.17-6.288.168-.298.299-.764.3-1.045v-.006zm19.444 39.79c0 .111-.094.186-.187.186-.113 0-.206-.075-.206-.187s.093-.206.206-.206c.093 0 .187.094.187.206zm-23.374-3.313c.243 1.31.15 2.32-.206 2.32-.112 0-.187-.374-.187-.842 0-.468-.056-1.422-.131-2.114-.131-1.629.206-1.217.524.636zm69.354-57.62c0 .598.318.654.562.111.28-.617.692-.655.505-.037-.3 1.048-1.142 2.695-1.553 3.088l-.45.411-.71-.411c-.862-.468-1.648-.356-1.741.243-.037.28-.58.692-1.815 1.347-1.273.693-1.629.955-1.273.955.262 0 1.198-.393 2.059-.88 1.647-.935 2.451-1.254 2.451-.935 0 .355-3.031 3.106-3.817 3.48-.58.262-1.03.337-1.872.244l-1.085-.113.468.393c.243.206.654.375.917.375.243 0 .505.093.58.187.187.318-.43 1.272-1.404 2.19-.505.486-1.198 1.31-1.553 1.852-.356.543-1.104 1.46-1.666 2.059-2.713 2.919-5.764 7.26-7.373 10.48-.692 1.384-1.123 2.002-1.516 2.208-.543.28-1.722 1.721-1.722 2.096 0 .112.356-.131.786-.524 1.03-.917 1.254-.899 1.123.075-.056.449-.019.786.056.786.094 0 1.011-1.685 2.04-3.78 2.003-4.08 4.23-7.655 6.25-9.975.693-.805 1.685-2.04 2.228-2.751.524-.693 1.44-1.834 2.002-2.527.58-.73 1.048-1.478 1.048-1.721 0-.337.112-.468.393-.468 1.086 0 .412 1.198-2.788 4.847-2.19 2.489-5.24 7.036-7.074 10.517-.693 1.291-1.928 3.5-2.751 4.903-.86 1.479-1.628 3.05-1.834 3.762-1.291 4.716-1.59 5.39-3.593 7.972-.543.692-1.61 2.377-2.414 3.743-2.04 3.555-5.222 7.934-7.523 10.367-1.928 2.04-4.417 4.21-4.829 4.21-.617-.018-.018-.86 1.479-2.17 4.66-4.042 9.45-10.648 11.378-15.663.337-.861.692-1.46.898-1.535.898-.28 2.134-2.283 2.134-3.444 0-.168.13-.467.28-.692.131-.206.356-.636.468-.973.113-.318.28-.767.356-.973.15-.356.13-.374-.206-.113-.187.169-.936 1.479-1.647 2.939-.936 1.927-1.516 2.844-2.133 3.443-.487.468-.843.973-.843 1.216 0 .58-2.04 4.136-3.574 6.27-.674.935-1.553 2.114-1.928 2.638-.954 1.31-3.143 3.725-5.183 5.708-1.853 1.797-1.965 1.815-2.19.393-.224-1.31-1.141-4.416-1.516-5.202-.224-.43-.954-1.778-1.647-2.976-.692-1.216-1.253-2.283-1.253-2.395 0-.113.411-.43.935-.73.506-.3 1.554-1.123 2.321-1.834 4.192-3.93 6.438-5.876 8.14-7.037.974-.655 4.829-4.416 5.952-5.801.411-.505.804-1.273.935-1.834.337-1.385 1.142-3.556 1.74-4.716l.581-1.123c.037-.075-.075-.15-.243-.15-.188 0-.562.562-.974 1.423-1.197 2.508-2.638 5.745-2.77 6.138-.168.561-1.085 1.647-1.085 1.273 0-.15.169-.506.393-.786.206-.262.375-.6.375-.73 0-.15.15-.543.337-.898.187-.337.748-1.778 1.253-3.2.543-1.48 1.236-2.995 1.629-3.556.692-.936 3.892-3.8 6.437-5.727 2.302-1.74 3.668-3.761 3.443-5.109-.393-2.395-.393-2.358.15-3.125.655-.973 1.348-1.347 2.676-1.478 1.516-.15 3.668-1.086 5.09-2.227 2.003-1.591 2.658-2.022 2.995-2.04.187 0 .486-.318.692-.73.487-.992.861-1.085.711-.168-.15 1.01.281.898.468-.113.169-.786.655-1.31.655-.692 0 .58.393.542.524-.056.131-.655.655-.824.655-.225zm-76.97 47.888c-.73.805-1.404 1.61-1.48 1.74-.093.15-.841.693-1.665 1.198-.842.506-1.852 1.18-2.245 1.498-1.404 1.085-2.19 3.611-1.46 4.585.28.355.3.299.3-.655 0-1.03.486-2.284 1.141-3.032.168-.206 1.048-.842 1.946-1.441.898-.599 1.965-1.497 2.377-2.002.412-.506 1.198-1.423 1.778-2.04.58-.618.954-1.16.842-1.236-.094-.056-.786.562-1.535 1.385zm-6.588-7.205c.449.206.842.468.842.562 0 .206-1.984 3.032-2.583 3.687-.262.28-.542.393-.86.336-.712-.15-1.91.337-2.508.974l-.543.598-.412-.542c-.224-.281-.467-.468-.523-.412-.038.037.093.655.318 1.329.224.673.468 1.497.524 1.815.074.318.449.917.88 1.329.73.748.73.767.317.973-.88.468-2.17 1.665-3.686 3.462-.88 1.01-1.628 1.797-1.685 1.74-.056-.056.562-1.01 1.367-2.133 2.32-3.182 2.507-3.537 2.507-4.679 0-1.384-1.254-3.78-2.788-5.352-.636-.636-1.142-1.272-1.142-1.422 0-.3 1.479-1.273 2.845-1.872 1.703-.767 5.82-.991 7.13-.393zm-4.173 12.501c-1.142.43-1.367.73-.393.562.748-.131.767-.131.467.224-.374.43-1.347 2.115-1.347 2.321 0 .056.112.112.262.112.131 0 .43-.355.618-.804.205-.45.655-1.18 1.01-1.61.955-1.198.861-1.347-.617-.805zm-5.484-9.02c1.217.936 2.358 2.658 2.714 4.174.505 2.04.243 2.863-1.74 5.52-1.853 2.49-1.703 2.358-3.05 2.358-1.741 0-2.359-.73-1.741-2.058.168-.393.168-.562 0-.73-.393-.393-.262-.749.28-.749.43 0 .487-.037.281-.3-.15-.149-.374-.299-.524-.299-.449 0-.542-.542-.168-1.104.28-.411.28-.543.056-.673-.131-.094-.356-.169-.487-.169-.112 0-.318-.13-.43-.262-.169-.206.056-.543.954-1.478.637-.655 1.217-1.105 1.292-1.011.056.112.056.28-.02.393-.074.112-.074.356 0 .524.094.28.15.28.45 0 .187-.168.561-.337.842-.374.786-.094.711-.749-.206-1.628-.43-.43-.786-.842-.786-.936 0-.337 1.048-1.722 1.31-1.722.169 0 .6.225.973.524zm20.998 4.155c-.225.168-2.808 3.069-3.35 3.78-.356.468-2.283 2.283-3.519 3.313-.336.28-.486.505-.336.56.449.15 3.256-2.02 4.51-3.499 1.946-2.283 3.556-4.753 2.695-4.154zm9.544 3.032c-.112.467-.487 1.534-.824 2.376-.58 1.479-.617 1.89-.187 1.61.393-.244.88-1.647 1.479-4.286.206-.88-.244-.599-.468.3zm-1.18.842c-.299.524-.111.954.188.486.187-.28.262-.992.13-.992-.036 0-.186.225-.317.506zm-1.066.056c-.355.412-.412.617-.13.617.205 0 .673-.767.542-.898-.038-.037-.225.094-.412.28zm28.895-4.155c-1.74 1.89-2.152 2.508-1.591 2.433.225-.037 4.023-4.154 4.023-4.379 0-.468-.71.094-2.432 1.946zM2.043 51.44c-.055.112-.018.187.094.187.113 0 .206-.075.206-.187s-.037-.206-.093-.206c-.038 0-.131.094-.206.206zm4.96-1.927c-.3.112-.524.318-.524.467 0 .244.075.244.58-.018.318-.169.6-.393.6-.487 0-.112-.038-.187-.057-.187-.037.019-.3.112-.599.225zM24.82 46.33c-.824.337-.636.524.468.487.88-.019 1.141-.112 1.198-.356.037-.262-.094-.318-.6-.318-.355.019-.842.094-1.066.187zm49.573-11.733c-.074.262-.56.973-1.122 1.59-1.18 1.366-2.115 3.07-1.685 3.07.169 0 .356-.169.412-.394.131-.374 2.17-3.35 2.452-3.537.262-.187.58-.935.468-1.048-.244-.243-.412-.13-.525.319zm1.348-2.49c-1.086.58-1.647 1.254-1.01 1.254.13 0 .411-.168.598-.374.187-.224.636-.45.973-.505 1.067-.225 1.31-.318 1.198-.505-.168-.281-1.104-.206-1.76.13zM32.323 29.75c-.15.374.281 1.29.655 1.422.206.056.243-.019.113-.28-.075-.207-.188-.618-.244-.918-.093-.599-.337-.71-.524-.224zm3.032-3.388c-.112.113-.206.562-.206.992 0 .711-.168 1.348-.692 2.545-.113.28-.075.356.13.28.487-.149 1.161-1.74 1.161-2.769 0-.954.019-.973.543-.86.299.056.767.15 1.029.243.449.13.468.112.187-.187-.356-.375-1.853-.543-2.152-.244zm4.716-1.89c-.318.618-.786 1.366-1.03 1.666-.392.505-.392.58-.112.86.281.281.356.225.843-.654.43-.749 1.272-2.733 1.272-2.957 0-.019-.075-.056-.187-.056s-.45.524-.786 1.141zm-.094-1.684c-.43.674-1.066 1.516-1.403 1.871-.562.6-.58.655-.262.955.3.262.355.262.468-.019.056-.187.599-1.067 1.197-1.946 1.01-1.535 1.273-2.096.936-2.077-.094.018-.505.561-.936 1.216zm-1.066-.842c-.543.748-1.254 1.628-1.591 1.984-.318.336-.543.692-.487.804.206.337.842.187.992-.243.056-.225.58-1.086 1.142-1.909 1.347-1.965 1.347-2.002 1.123-2.002-.094 0-.637.617-1.18 1.366zm47.234-10.798c-.075.13.13.206.487.206.411 0 .767.168 1.085.505.468.505.805.393.561-.206-.206-.58-1.852-.954-2.133-.505zm.206-2.003c-.094.244.056.506.486.88.749.674 1.254.505.506-.168-.281-.262-.506-.618-.506-.768 0-.393-.318-.355-.486.056zm11.902-6.55c-.15.169-.206.375-.15.45.187.187.58-.262.487-.543-.056-.15-.15-.131-.337.094zm-.936.02c-.15.43.019.56.318.205.15-.187.169-.318.02-.393-.113-.075-.263 0-.338.187z"
      fillRule="nonzero"
    />
  </Blank>
)

export default HighDiveIcon