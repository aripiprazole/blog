/*
 * My personal blog and portfolio website
 * Copyright (C) 2023  Gabrielle Guimarães
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';

import Image from 'next/image';

import styles from '~/styles/components/Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          alt="Gabrielle Guimarães"
          height={340}
          width={340}
          src="https://raw.githubusercontent.com/aripiprazole/aripiprazole/main/profile.png"
        />
      </div>
    </div>
  );
}

export default Sidebar;