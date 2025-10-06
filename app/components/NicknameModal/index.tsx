export const NicknameModal = ({
    nickname,
    setNickname,
    onClose,
}: {
    nickname: string;
    setNickname: (nickname: string) => void;
    onClose: () => void;
}) => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-neutral text-xl font-bold mb-4 text-center">
                    ニックネームを入力してください
                </h2>
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="ニックネーム"
                    className="text-neutral w-full p-3 border border-gray-300 rounded-lg mb-4"
                    onKeyPress={(e) => e.key === "Enter" && onClose()}
                />
                <button
                    onClick={onClose}
                    disabled={!nickname}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    決定
                </button>
            </div>
        </div>
    );
};