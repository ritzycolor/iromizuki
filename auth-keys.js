/* 認証キー（ハッシュ化）— このファイルだけ差し替えればキー更新可能
   平文キーはここには無く、SHA-256ハッシュのみ。新規キーは gen-key で生成。
   label は管理用メモ（公開されます。秘密情報は書かないこと）。 */
const AUTH_SALT="iromizuki:sk:v1";
const AUTH_HASHES=[
  {h:"4b636fe8228baebe3aa13fd9fb49fc8e55fb950a6fff309c62b2d9fc365cb815", expires:"2026-12-31", label:"協会全体2026"},
  {h:"6139bd3b8259630a8f956695a70c67523ec6a0aa7aec73ab29f5eff965ba47eb", expires:"2026-06-30", label:"体験版"},
  {h:"491ffe8abfa609355b0526516b47617652075f96c1ccc533aecf77aee6ae7c96", expires:"2027-03-31", label:"鑑定士A"}
];
